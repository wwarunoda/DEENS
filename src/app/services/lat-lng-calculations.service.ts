import { Injectable } from '@angular/core';
import { LatLngModel } from '../models/lat-lng.model';
import { LatlngWithDistanceModel } from '../models/latlng-with-distance.model';

var R = 6371000 // radius of earth in m
@Injectable({
  providedIn: 'root'
})
export class LatLngCalculationsService {

  constructor() { }

  getDestinationLatLong(latlngFirst: LatLngModel, azimuth: any, distance: number): LatLngModel {
    /* 'returns the lat an long of destination point 
    given the start lat, long, aziuth, and distance'''
    R = 6378.1 #Radius of the Earth in km
    */
    let brng = this.deg2rad(azimuth)  // Bearing is degrees converted to radians.
    let d = distance/1000 // Distance m converted to km
    let lat1 = this.deg2rad(latlngFirst.lat) // Current dd lat point converted to radians
    let lon1 = this.deg2rad(latlngFirst.lng) // Current dd long point converted to radians
    let lat2 = Math.asin(Math.sin(lat1) * Math.cos(d/R) + Math.cos(lat1)* Math.sin(d/R)* Math.cos(brng))
    let lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d/R)* Math.cos(lat1), Math.cos(d/R)- Math.sin(lat1)* Math.sin(lat2))
    // convert back to degrees
    lat2 = this.rad2deg(lat2)
    lon2 = this.rad2deg(lon2)
    return {lat:lat2, lng: lon2};
  }

  calculateBearing(latlngFirst: LatLngModel, latlngSecond: LatLngModel) {
    /* calculates the azimuth in degrees from start point to end point''' */
    let startLat = this.deg2rad(latlngFirst.lat);
    let startLong = this.deg2rad(latlngFirst.lng);
    let endLat = this.deg2rad(latlngSecond.lat);
    let endLong = this.deg2rad(latlngSecond.lng);
    let dLong = endLong - startLong;
    let dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
    if (dLong > Math.PI) {
      if (dLong > 0.0)
      dLong = -(2.0 * Math.PI - dLong)
      else 
      dLong = (2.0 * Math.PI + dLong)
    }
         
    let bearing = (this.rad2deg(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
    return bearing
  }

  getDistanceFromLatLon(latlngFirst: LatLngModel, latlngSecond: LatLngModel): number {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(latlngSecond.lat - latlngFirst.lat);  // deg2rad below
    var dLon = this.deg2rad(latlngSecond.lng - latlngFirst.lng);
    var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.deg2rad(latlngFirst.lat)) * Math.cos(this.deg2rad(latlngSecond.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d * 1000; // Convert km to meters
  }

  deg2rad(deg): number {
    return deg * (Math.PI / 180)
  }

  rad2deg(rad): number {
    return rad * (180 / Math.PI)
  } 

  latlngFindByDistance(latlngWithDistance: LatlngWithDistanceModel): LatLngModel {
    let d = latlngWithDistance.distance / 1000; // convert meters to km
    let lat1 = latlngWithDistance.lat;
    let lon1 = latlngWithDistance.lng;
    var R = 6371; // Radius of the earth in km
    var brng = 1.57 // Bearing is 90 degrees converted to radians.

    lat1 = this.deg2rad(lat1); // Current lat point converted to radians
    lon1 = this.deg2rad(lon1); // Current long point converted to radians

    var lat2 = Math.asin( Math.sin(lat1)*Math.cos(d/R) +
     Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng));

    var lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(d/R)*Math.cos(lat1),
             Math.cos(d/R)-Math.sin(lat1)*Math.sin(lat2))

    lat2 = this.rad2deg(lat2);
    lon2 = this.rad2deg(lon2);
    return {lat: lat2, lng: lon2};
  }

  latlngFindByDistanceWithBrng(latlngWithDistance: LatlngWithDistanceModel, heading: number): LatLngModel {
    let d = latlngWithDistance.distance / 1000; // convert meters to km
    let lat1 = latlngWithDistance.lat;
    let lon1 = latlngWithDistance.lng;
    var R = 6371; // Radius of the earth in km
    // var brng = 1.57 // Bearing is 90 degrees converted to radians.
    const brng = this.deg2rad(heading);
    lat1 = this.deg2rad(lat1); // Current lat point converted to radians
    lon1 = this.deg2rad(lon1); // Current long point converted to radians

    var lat2 = Math.asin( Math.sin(lat1)*Math.cos(d/R) +
     Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng));

    var lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(d/R)*Math.cos(lat1),
             Math.cos(d/R)-Math.sin(lat1)*Math.sin(lat2))

    lat2 = this.rad2deg(lat2);
    lon2 = this.rad2deg(lon2);
    return {lat: lat2, lng: lon2};
  }

}
