import { Injectable } from '@angular/core';
import { Point } from '../models/point.model';

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

      // currentData = this.reduceError(currentData);

      const accelerationBoth = Math.sqrt((currentData.accX * currentData.accX) + (currentData.accY * currentData.accY) + (currentData.accZ * currentData.accZ));
      this.speedChange = accelerationBoth * currentData.lapTime;
      this.speedChangeZ = Math.sqrt(currentData.accZ * currentData.accZ) * currentData.lapTime;
      if(currentData.accZ <= 0) {
        /*
        This time vihicle go ahead. so speed = speedPre + accelerationSpped. But accZ is -. So speed = speedPre - (-accelerationSpped)
         */
        if(!currentData.isGPSEnable) {
          this.vZ = currentData.currentSpeedZ;
          this.speed = currentData.currentSpeed;
        } else {
          this.vZ = currentData.gpsSpeed;
          this.speed = currentData.gpsSpeed;
        }
        this.vZ += this.speedChangeZ;
        this.speed += this.speedChange;
      } else {
        /*
        This time vihicle go ahead. so speed = speedPre - accelerationSpped. But accZ is +. So speed = speedPre - (accelerationSpped)
         */
        if(!currentData.isGPSEnable) {
          this.vZ = currentData.currentSpeedZ;
          this.speed = currentData.currentSpeed;
        } else {
          this.vZ = currentData.gpsSpeed;
          this.speed = currentData.gpsSpeed;
        }
        this.vZ -= this.speedChangeZ;
        this.speed -= this.speedChange;
      } 

      if(currentData.isSetError) {
        this.setSpeedError(this.speed, this.vZ, currentData);
      }

      // reduce errors
      this.vZ -= this.errorSpeedZ;
      this.speed -= this.errorSpeed;

      this.vZ = this.vZ < 0 ? 0 : this.vZ;
      this.speed = this.speed < 0 ? 0 : this.speed;

      return this.getPoint();
  }

  setSpeedError(calculatedSpeed: number, calculatedSpeedZ: number, currentData: Point) {
    const speedDifference = calculatedSpeed - currentData.gpsCurrentSpeed;
    const speedDifferenceZ = calculatedSpeedZ - currentData.gpsCurrentSpeed;

    if(this.errorSpeed === 0) {
      this.errorSpeed = speedDifference;
    } else {
      this.errorSpeed = (this.errorSpeed + speedDifference) / 2;
    }

    if(this.errorSpeedZ === 0) {
      this.errorSpeedZ = speedDifferenceZ;
    } else {
      this.errorSpeedZ = (this.errorSpeed + speedDifferenceZ) / 2;
    }
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
