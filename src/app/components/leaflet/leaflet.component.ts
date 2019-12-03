import { Component, OnInit } from '@angular/core';

import 'leaflet-routing-machine';
import { LatLngModel } from '../../models/lat-lng.model.js';
import { LatLngService } from '../../services/lat-lng.service';
import { InstructionsWithDistancesModel } from '../../models/instructions-with-distances.model';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs/internal/observable/timer';
import { LatlngWithDistanceModel } from 'src/app/models/latlng-with-distance.model.js';


declare let L;

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent  implements OnInit {
  map: any;
  vehicleSpeed = 0;
  distanceCompletedKm = 0;

  initialForcus: number;
  initialLonLat: LatLngModel;
  startLonLat;
  endLogLat;

  startMarker: any;
  endMarker: any;
  waypoints: any;

  distanceCalculatorIterationPeriod = 100;
  pathFallowerIterationPeriod = 10;

  constructor(
    private latLngService: LatLngService
  ) { }

  ngOnInit() {

    // initialize start values
    this.initialLonLat = {
      lat: 6.9,
      lng: 81
    };

    this.initialForcus = 9;

    this.initializeMap();
  }

  /*
  Reset map
  */
  resetLocations() {
    this.map.remove();
    this.initializeMap();
    this.startMarker = null;
    this.endMarker = null;
  }

  /*
  Follow the path according to the given speed
  */
  fallowThePath() {
    let instructionsWithDistancesList: InstructionsWithDistancesModel[];
    // get total distance informations
    instructionsWithDistancesList = this.latLngService.getDistanceMap(this.waypoints);
    const totalDistance: number =  instructionsWithDistancesList[instructionsWithDistancesList.length - 1].totalDistance;
    // start calculating distance
    this.getDistanceCompleted(totalDistance);
    // calculate total coordinations for tempary use only
    let completeCoordinations: LatlngWithDistanceModel[] = [];
    let iteration = 0;
    let temparyMarker: any[] = [];

    instructionsWithDistancesList.forEach(coordinations => {
      coordinations.latlngWithDistanceList.forEach(item => {
        completeCoordinations = [...completeCoordinations, item];
      });
    });
    // console.log(completeCoordinations);
    if (completeCoordinations.length > 0) {
      const everySecond: Observable<number> = timer(0, this.pathFallowerIterationPeriod);
      const subscription = everySecond.subscribe(() => {
        const coordinate = completeCoordinations[iteration];
        if (coordinate.distance <= (this.distanceCompletedKm * 1000)) {
          temparyMarker = [...temparyMarker, L.marker([coordinate.lat, coordinate.lng]).addTo(this.map)];
          if (iteration > 0) {
            this.map.removeLayer(temparyMarker[iteration - 1]);
          }
          if ((this.distanceCompletedKm * 1000) >= totalDistance ) {
            subscription.unsubscribe();
          }
          iteration++;
        }
      });
    }
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

  private initializeMap() {

    // this.map = L.map('map').setView([this.initialLonLat.lat, this.initialLonLat.lng], this.initialForcus);
    this.map = L.map('map').setView([this.initialLonLat.lat, this.initialLonLat.lng],16);

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
 
      if(!this.startMarker) {
        // get start location
        const pos = e.latlng;
        this.startLonLat = pos;
  
        this.startMarker = L.marker(
          pos, {
          draggable: true
        });
  
        this.startMarker.on('drag', function (e) {
  
          this.startLonLat = e.latlng;
  
        });
        this.startMarker.addTo(map);

      } else if(this.startMarker && !this.endMarker) {
        // get end location
          var pos = e.latlng;
          this.endLogLat = pos;
    
          this.endMarker = L.marker(
            pos, {
            draggable: true
          });
    
          this.endMarker.on('drag', function (e) {
    
            this.endLogLat = e.latlng;
    
          });
          this.endMarker.addTo(map);

          // Get waypoints if both markers are selected
          this.getWayPoints(this.map);
      }
    }.bind(this));
  }

  /*
  Get Waypoints using start location and end location (instructions)
  */
  private getWayPoints(map: any) {
    this.waypoints = L.Routing.control({
      waypoints: [
          L.latLng(this.startLonLat.lat, this.startLonLat.lng),
          L.latLng(this.endLogLat.lat, this.endLogLat.lng),
      ],
      // routeWhileDragging: true,
      // show: true,
      // autoRoute: true
    }).addTo(map);

    map.removeLayer(this.startMarker);
    map.removeLayer(this.endMarker);    
  }

  /*
  Get vehicle distance completed for current speed
  */
  private getDistanceCompleted(totalDistance: number) {   
    const everySecond: Observable<number> = timer(0, this.distanceCalculatorIterationPeriod);
    const subscription = everySecond.subscribe(() => {
      this.distanceCompletedKm += this.vehicleSpeed * (this.distanceCalculatorIterationPeriod/(1000 * 60 * 60));
      if( (this.distanceCompletedKm * 1000) >= totalDistance) {
        subscription.unsubscribe();
      }
    });
  }
}
