import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading, DeviceOrientationCompassOptions } from '@ionic-native/device-orientation/ngx';

import 'leaflet-routing-machine';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs/internal/observable/timer';

import { LatLngModel } from '../../models/lat-lng.model.js';
import { LatLngService } from '../../services/lat-lng.service';
import { LatlngWithDistanceModel } from '../../models/latlng-with-distance.model.js';
import { Dev } from '../../services/database.service.js';
import { CalculationLogModel } from '../../models/calculation-log.model.js';
import { MeasurePointService } from '../../services/measure-point.service.js';
import { LatLngCalculationsService } from '../../services/lat-lng-calculations.service.js';
import { Point } from 'src/app/models/point.model.js';


declare let L: any;
declare var sensors: any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  map: any;
  vehicleSpeed = 0;
  distanceCompletedKm = 0;

  initialForcus: number;
  initialLonLat: LatLngModel;
  startLonLat;
  endLogLat;

  startMarker: any;s
  waypoints: any;

  distanceCalculatorIterationPeriod = 100;
  pathFallowerIterationPeriod = 10;

  /*************************************** Acceleration local variables *********************************/
  logs: Dev[] = [];
  description: any;
  logList: CalculationLogModel[] = [];
  count = 0;
  private cnt = 0;
  private bufferSize = 100;
  private accelerationFrequency = 20;
  private accelerationType = 'LINEAR_ACCELERATION';

  options: GeolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  compassOptions: DeviceOrientationCompassOptions = {
    frequency: 1000  }

  previusSpeed = 0;
  previusSpeedX = 0;
  previusSpeedY = 0;
  previusSpeedZ = 0;

  currentSpeed = '0';
  currentSpeedX = '0';
  currentSpeedY = '0';
  currentSpeedZ = '0';

  accX = 0;
  accY = 0;
  accZ = 0;

  accErrorX = 0;
  accErrorY = 0;
  accErrorZ = 0;

  compassData: DeviceOrientationCompassHeading;
  compassHeading: number = 0;

  strtTime: Date;
  previusTimeInMS: number;

  fixError = true;
  gpsSpeed = 0;
  gpsPreviusSpeed = 0;
  gpsLatLng: LatLngModel = { lat: 0, lng: 0 };
  timetest: any;
  isGpsAccess = false;
  isSetError = false;
  /****************************************END **********************************************************/

  constructor(
    private platform: Platform,
    private measurePointService: MeasurePointService,
    private emailComposer: EmailComposer,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private latlngCalService: LatLngCalculationsService,
    private latLngService: LatLngService,
    private deviceOrientation: DeviceOrientation
  ) { this.timetest = Date.now(); }

  ngOnInit() {

    // initialize start values
    this.initialLonLat = {
      lat: 6.9,
      lng: 81
    };

    this.initialForcus = 9;

    this.platform.ready().then(() => {
      this.onSensorChange();
      this.checkGPSPermission();
 // Get the device current compass heading
  this.deviceOrientation.getCurrentHeading().then(
     (data: DeviceOrientationCompassHeading) => {
       this.compassData = data;
      }
   );
      // Watch the device compass heading change
      var subscription = this.deviceOrientation.watchHeading(this.compassOptions).subscribe(
        (data: DeviceOrientationCompassHeading) => {
          this.compassData = data;
          this.compassHeading = data.trueHeading;
        }
      );
    });
  }

  /*
  Reset map
  */
  resetLocations() {
    this.map.remove();
    this.initializeMap(this.gpsLatLng);
    this.startMarker = null;
  }

  /*
  Follow the path according to the given speed
  */
  fallowThePath() {
    // calculate total coordinations for tempary use only
    let completeCoordinations: LatlngWithDistanceModel;
    let iteration = 0;
    let previusCompletedDistance = 0;
    let temparyMarker: any[] = [];
    temparyMarker = [...temparyMarker, L.marker([this.startLonLat.lat, this.startLonLat.lng])];
    this.getWorkDistanceCompleted();    
    const everySecond: Observable<number> = timer(0, this.pathFallowerIterationPeriod);

    const subscription = everySecond.subscribe(() => {
        const distancdGap = (this.distanceCompletedKm - previusCompletedDistance) * 1000;
        const latlng = temparyMarker[iteration].getLatLng();
        completeCoordinations = {lat: latlng.lat, lng: latlng.lng, distance: distancdGap};
        const currentLocation =  this.latlngCalService.latlngFindByDistanceWithBrng(completeCoordinations, this.compassHeading);
        temparyMarker = [...temparyMarker, L.marker([currentLocation.lat, currentLocation.lng]).addTo(this.map)];
        if (iteration > 0) {
          this.map.removeLayer(temparyMarker[iteration - 1]);
        }
        iteration++;

        previusCompletedDistance = this.distanceCompletedKm;
    });
  }

  /*
  Go through the route line
  */
  goThroughLine() {
    const coordinateList: LatLngModel[] = this.waypoints._line._route.coordinates;
    let temparyMarker: any[] = [];
    let intervalValue = 0;	// in milliseconds
    let index = 0;
    let iteration = 1;
    coordinateList.forEach(item => {
      // calculate point in xy space
      intervalValue = 10 * iteration;
      setTimeout(() => {
        temparyMarker = [...temparyMarker, L.marker([item.lat, item.lng]).addTo(this.map)];
        if (index > 0) {
          this.map.removeLayer(temparyMarker[index - 1]);
        }
        index++;
      }, intervalValue);
      iteration++;
    });
  }

  private initializeMap(latLng: LatLngModel) {

    // this.map = L.map('map').setView([this.initialLonLat.lat, this.initialLonLat.lng], this.initialForcus);
    this.map = L.map('map').setView([latLng.lat, latLng.lng], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.setMarkersAndGetNavigations(this.map);
    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);
  }

  /*
  Get map on click first location as start location and second location as end location
  Enable user to drag and drop both locations after select
  */
  private setMarkersAndGetNavigations(map: any) {

    map.on('click ', function mapClickListen(e) {

      if (!this.startMarker) {
        // get start location
        const pos = e.latlng;
        this.startLonLat = pos;

        this.startMarker = L.marker(
          pos, {
          draggable: true
        });

        this.startMarker.on('drag', function(e) {

          this.startLonLat = e.latlng;

        });
        this.startMarker.addTo(map);

      }
    }.bind(this));
  }

  private getWorkDistanceCompleted() {
    const everySecond: Observable<number> = timer(0, this.distanceCalculatorIterationPeriod);
    const subscription = everySecond.subscribe(() => {
      this.distanceCompletedKm += Number(this.currentSpeed) * (this.distanceCalculatorIterationPeriod / (1000 * 60 * 60));
    });
  }

  /******************** Accelerometer methods ******************************************************************/
  fixedErrorStop() {
    this.strtTime = new Date();
    this.fixError = false;
  }

  gpsConfig() {
    this.isGpsAccess = !this.isGpsAccess;
    if (!this.isGpsAccess) {
      this.isSetError = false;
    }
  }

  private onSensorChange() {

    // Access acceleration
    sensors.enableSensor(this.accelerationType);
    setInterval(() => {
      sensors.getState((values) => {
        this.cnt++;
        this.accX += values[0];
        this.accY += values[1];
        this.accZ += values[2];

        if (this.cnt >= this.bufferSize) {
          this.locationCalculation();
          this.gpsPreviusSpeed = this.gpsSpeed;
        }
      });
    }, this.accelerationFrequency);

  }

  private locationCalculation() {
    const tempPoint: Point = this.getPoint();
    this.resetAcc();
    const measureData = this.measurePointService.calSpeed(tempPoint);
    this.accErrorX = measureData.accErrorX;
    this.accErrorY = measureData.accErrorY;
    this.accErrorZ = measureData.accErrorZ;
    if (!this.fixError) {
      this.currentSpeedZ = (measureData.currentSpeedZ * 3.6).toFixed(4);
      this.currentSpeed = (measureData.currentSpeed * 3.6).toFixed(4);
      this.previusSpeed = measureData.currentSpeed;
      this.previusSpeedZ = measureData.currentSpeedZ;
      this.writePointLog(tempPoint, measureData);
    }
  }

  /* returrns parameters, using buffer: average acceleration
    since last call of getPoint().
  */
  private getPoint(): Point {
    const point: Point = {
      accX: this.accX,
      accY: this.accY,
      accZ: this.accZ,
      cnt: this.cnt,
      lapTime: (this.accelerationFrequency * this.cnt * 0.001), // one cycle time in seconds
      currentSpeed: this.previusSpeed,
      currentSpeedX: this.previusSpeedX,
      currentSpeedY: this.previusSpeedY,
      currentSpeedZ: this.previusSpeedZ,
      gpsSpeed: this.gpsPreviusSpeed,
      gpsCurrentSpeed: this.gpsSpeed,
      isGPSEnable: this.isGpsAccess,
      isSetError: this.isSetError
    };
    return point;
  }

  /**
   * add log to db
   */
  private writePointLog(point: Point, measureData: Point) {
    const log: CalculationLogModel = {
      accX: point.accX / point.cnt,
      accY: point.accY / point.cnt,
      accZ: point.accZ / point.cnt,
      currentSpeedZ: measureData.currentSpeedZ * -3.6,
      currentSpeed: measureData.currentSpeed * 3.6,
      startTime: this.strtTime,
      accErrorX: measureData.accErrorX,
      accErrorY: measureData.accErrorY,
      accErrorZ: measureData.accErrorZ,
      speedChange: measureData.speedChange * 3.6,
      speedChangeZ: measureData.speedChangeZ * 3.6,
      errorSpeed: measureData.errorSpeed * 3.6,
      errorSpeedZ: measureData.errorSpeedZ * 3.6,
      gpsSpeed: this.gpsPreviusSpeed * 3.6
    };
    this.logList = [...this.logList, log];
  }

  private resetAcc() {
    this.accX = 0;
    this.accY = 0;
    this.accZ = 0;
    this.cnt = 0;
  }

  sendEmail() {
    const logJson: string = JSON.stringify(this.logList);
    const email = {
      to: 'arunoda89@gmail.com',
      cc: 'arunoda.17@cse.mrt.ac.lk',
      bcc: [],
      attachments: [
      ],
      subject: 'DEENS',
      body: logJson,
      isHtml: true
    };
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        this.emailComposer.open(email);
      }
    });
    this.resetLocations();
  }

  /*******************************************************************************GPS  */

  // Check if application having GPS access permission
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          // If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          // If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
      } else {
        // Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              // Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error);
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates();
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  setError() {
    this.isSetError = !this.isSetError;
    this.isGpsAccess = true;
  }
  // Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.watchPosition(this.options).subscribe((resp) => {
      const currentLocation: LatLngModel = { lat: resp.coords.latitude, lng: resp.coords.longitude };
      const distance = this.latlngCalService.getDistanceFromLatLon(this.gpsLatLng, currentLocation);
      const currentTime = new Date().getTime();
      if (distance > 0 && this.count > 10) {
        const timeDifference = currentTime - this.previusTimeInMS;
        this.gpsSpeed = distance / (timeDifference * 0.001);
      } else {
        this.gpsSpeed = 0;
      }
      this.previusTimeInMS = currentTime;
      if ( this.gpsLatLng.lat === 0) {
        this.initializeMap(currentLocation);
      }
      this.gpsLatLng = currentLocation;
      this.count++;
    });
  }
  /********************* END **********************************************************************************/
}
