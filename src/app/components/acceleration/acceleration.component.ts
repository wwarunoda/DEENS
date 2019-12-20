
import { OnInit, Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Point } from '../../models/point.model';
import { MeasurePointService } from '../../services/measure-point.service';
import { Dev } from '../../services/database.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CalculationLogModel } from '../../models/calculation-log.model';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { LatLngModel } from '../../models/lat-lng.model';

declare var sensors;

@Component({
  selector: 'app-acceleration',
  templateUrl: './acceleration.component.html',
  styleUrls: ['./acceleration.component.scss'],
})

export class AccelerationComponent implements OnInit {

  /*
  declarations
  */
  /* 
  extend from abstract class 
  */
  logs: Dev[] = [];
  description: any;
  logList: CalculationLogModel[] = [];

  private cnt = 0;
  private bufferSize = 100;
  private accelerationFrequency = 20;
  private accelerationType = 'LINEAR_ACCELERATION';

  previusSpeed: number = 0;
  previusSpeedX: number = 0;
  previusSpeedY: number = 0;
  previusSpeedZ: number = 0;

  currentSpeed: string = "0";
  currentSpeedX: string = "0";
  currentSpeedY: string = "0";
  currentSpeedZ: string = "0";

  accX = 0;
  accY = 0;
  accZ = 0;

  accErrorX = 0;
  accErrorY = 0;
  accErrorZ = 0;

  strtTime: Date;

  fixError: boolean = true;
  gpsSpeed = 0;
  gpsLatLng: LatLngModel = {lat: 0, lng: 0}
  timetest: any;

  options = {
    timeout: 1000 
  }

  constructor(
    private platform: Platform,
    private measurePointService: MeasurePointService,
    private emailComposer: EmailComposer,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy
  ) {
    this.timetest = Date.now();
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.onSensorChange();
      this.checkGPSPermission();
    });
  }

  fixedErrorStop() {
    this.strtTime = new Date();
    this.fixError = false;
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
        }
      });
    }, this.accelerationFrequency);

  }

  private locationCalculation() {
    let tempPoint: Point = this.getPoint();    
    this.resetAcc();
    let measureData = this.measurePointService.calSpeed(tempPoint);
    this.accErrorX = measureData.accErrorX;
    this.accErrorY = measureData.accErrorY;
    this.accErrorZ = measureData.accErrorZ;
    if(!this.fixError) {      
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
      lapTime: (this.accelerationFrequency * this.cnt * 0.001 ), // one cycle time in seconds
      currentSpeed: this.previusSpeed,
      currentSpeedX: this.previusSpeedX,
      currentSpeedY: this.previusSpeedY,
      currentSpeedZ: this.previusSpeedZ,
      gpsSpeed: this.gpsSpeed
    }
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
      speedChange: measureData.speedChange,
      speedChangeZ: measureData.speedChangeZ,
      errorSpeed: measureData.errorSpeed,
      errorSpeedZ: measureData.errorSpeedZ,
      gpsSpeed: this.gpsSpeed
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
    let email = {
      to: 'arunoda89@gmail.com',
      cc: 'arunoda.17@cse.mrt.ac.lk',
      bcc: [],
      attachments: [
      ],
      subject: 'DEENS',
      body: logJson,
      isHtml: true
    }
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        this.emailComposer.open(email);
      }
     });
  }

  /*******************************************************************************GPS  */

   //Check if application having GPS access permission  
   checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
 
          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {
 
          //If not having permission ask for permission
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
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }
 
  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

 
  // Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition(this.options).then(() => {      
    }).catch((error) => {
      alert('Error getting location' + error);
    });

    this.geolocation.watchPosition().subscribe((resp) => {
      this.gpsLatLng = {lat: resp.coords.latitude, lng: resp.coords.longitude };
      this.gpsSpeed = resp.coords.speed;
    })
  }

}
