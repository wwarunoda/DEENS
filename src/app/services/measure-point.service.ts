import { Injectable } from '@angular/core';
import { Point } from '../models/point.model';
import { Direction } from '../models/direction.model';

@Injectable({
  providedIn: 'root'
})
export class MeasurePointService {
  private vZ: number = 0;
  private eX: number = 0;
  private eY: number = 0;
  private eZ: number = 0;
  private errorSpeed: number = 0;
  private errorSpeedZ: number = 0;
  private speed: number = 0;
  private speedChange: number = 0;
  private speedChangeZ: number = 0;

  constructor() {}
    calSpeed(currentData: Point): Point {

      currentData = this.getAvaragePoint(currentData);

      if(currentData.gpsSpeed < 0.5) {
        this.setError(currentData);
      }


      currentData = this.reduceError(currentData);
      
      const accelerationBoth = Math.sqrt((currentData.accX * currentData.accX) + (currentData.accY * currentData.accY) + (currentData.accZ * currentData.accZ));
      this.speedChange = accelerationBoth * currentData.lapTime;
      this.speedChangeZ = (currentData.accZ * -1) * currentData.lapTime;
      if(currentData.accZ <= 0) {
        /*
        This time vihicle go ahead. so speed = speedPre + accelerationSpped. But accZ is -. So speed = speedPre - (-accelerationSpped)
         */
        if(currentData.gpsSpeed >= 9) {
          this.vZ = currentData.currentSpeedZ + this.speedChangeZ - this.errorSpeedZ;
          this.speed = currentData.currentSpeed + this.speedChange - this.errorSpeed;
        } else {
          this.vZ = currentData.gpsSpeed + this.speedChangeZ;
          this.speed = currentData.gpsSpeed + this.speedChange;
        }        
      } else {
        /*
        This time vihicle go ahead. so speed = speedPre - accelerationSpped. But accZ is +. So speed = speedPre - (accelerationSpped)
         */
        if(currentData.gpsSpeed >= 9) {
          this.vZ = currentData.currentSpeedZ - this.speedChangeZ - this.errorSpeedZ;
          this.speed = currentData.currentSpeed - this.speedChange - this.errorSpeed;
        } else {
          this.vZ = currentData.gpsSpeed - this.speedChangeZ;
          this.speed = currentData.gpsSpeed - this.speedChange;
        }         
      } 

      if(currentData.gpsSpeed < 9) {
        this.setSpeedError(this.speed, this.vZ, currentData);
      }
      this.vZ = this.vZ < 0 ? 0 : this.vZ;
      this.speed = this.speed < 0 ? 0 : this.speed;

      return this.getPoint();
  }

  getAvaragePoint(currentData: Point): Point {
    currentData.accX = currentData.accX / currentData.cnt;
    currentData.accY = currentData.accY / currentData.cnt;
    currentData.accZ = currentData.accZ / currentData.cnt;
    return currentData;
  }

  reduceError(currentData: Point): Point {
    currentData.accX -= this.eX;
    currentData.accY -= this.eY;
    currentData.accZ -= this.eZ;
    return currentData;
  }

  setError(currentData: Point) {
    this.eX = (this.eX + currentData.accX) / 2;
    this.eY = (this.eY + currentData.accY) / 2;
    this.eZ = (this.eZ + currentData.accZ) / 2;
  }

  setSpeedError(speed: number, speedZ: number, currentData: Point) {
    const error = speed - currentData.gpsSpeed;
    const errorZ = speedZ - currentData.gpsSpeed;
    this.errorSpeed = (this.errorSpeed + error) / 2;
    this.errorSpeedZ = (this.errorSpeed + errorZ) / 2;
  }

 private getPoint(): Point {
  const point: Point = {
    currentSpeed: this.speed,
    currentSpeedZ: this.vZ,
    speedChange: this.speedChange,
    speedChangeZ: this.speedChangeZ,
    accErrorX: this.eX,
    accErrorY: this.eY,
    accErrorZ: this.eZ,
    errorSpeed: this.errorSpeed,
    errorSpeedZ: this.errorSpeedZ
  }
  return point;
}

}
