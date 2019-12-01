import { Injectable } from '@angular/core';
import { Point } from '../models/point.model';
import { Direction } from '../models/direction.model';

@Injectable({
  providedIn: 'root'
})
export class MeasurePointService {
  private sign: boolean;
  private directionList: Direction[] = [];
  private tempDirection : Direction;
  private acceleration: number;

  constructor() {}
    calSpeed(currentData: Point): number {
      const unsignAccX = currentData.accX < 0 ? currentData.accX * (-1) : currentData.accX;
      const unsignAccY = currentData.accY < 0 ? currentData.accY * (-1) : currentData.accY;
      const unsignAccZ = currentData.accZ < 0 ? currentData.accZ * (-1) : currentData.accZ;
      if (unsignAccX > unsignAccY) {
        if(unsignAccX > unsignAccZ) {
          const direction = currentData.accX > 0 ? true : false;
          const axis = 1;
          this.tempDirection = {direction, axis}
        } else {
          const direction = currentData.accZ > 0 ? true : false;
          const axis = 3;
          this.tempDirection = {direction, axis}
        }        
      }
      else {
        if(unsignAccY > unsignAccZ){
          const direction = currentData.accY > 0 ? true : false;
          const axis = 2;
          this.tempDirection = {direction, axis}
        } else {
          const direction = currentData.accZ > 0 ? true : false;
          const axis = 3;
          this.tempDirection = {direction, axis}
        }        
      }
      this.directionList = [...this.directionList, this.tempDirection];

      currentData = this.getAvaragePoint(currentData);
      this.acceleration = currentData.accX * currentData.accX +
                          currentData.accY * currentData.accX +
                          currentData.accZ * currentData.accX;

      this.acceleration =  Math.sqrt(this.acceleration);
      const timeLap: number = ((currentData.accelerationFrequency) / 1000);
      return this.acceleration * timeLap * 3.6 ; // * 3.6 to convert m/s to km/h
  }

  getAvaragePoint(currentData: Point): Point {
    currentData.accX = currentData.accX / currentData.cnt;
    currentData.accY = currentData.accY / currentData.cnt;
    currentData.accZ = currentData.accZ / currentData.cnt;
    return currentData;
  }

  getCurrentDirection() : Direction {
    const xDirections = this.directionList.filter(xDirection => xDirection.axis === 1);
    const yDirections = this.directionList.filter(yDirection => yDirection.axis === 2);
    const zDirections = this.directionList.filter(zDirection => zDirection.axis === 3);
    if(xDirections.length > yDirections.length){
      if(xDirections.length > zDirections.length) {
        const directionSignPluse = xDirections.filter(sign => sign.direction === true);
        const tempSign = directionSignPluse.length > ( xDirections.length * 0.5 ) ? true : false;
        return {direction: tempSign, axis: 1};
      } else {
        const directionSignPluse = zDirections.filter(sign => sign.direction === true);
        const tempSign = directionSignPluse.length > ( zDirections.length * 0.5 ) ? true : false;
        return {direction: tempSign, axis: 3};
      }
    } else {
      if(yDirections.length > zDirections.length) {
        const directionSignPluse = yDirections.filter(sign => sign.direction === true);
        const tempSign = directionSignPluse.length > ( yDirections.length * 0.5 ) ? true : false;
        return {direction: tempSign, axis: 2};
      } else {
        const directionSignPluse = zDirections.filter(sign => sign.direction === true);
        const tempSign = directionSignPluse.length > ( zDirections.length * 0.5 ) ? true : false;
        return {direction: tempSign, axis: 3};
      }
    }  
  }

  clearDirectionList() {
    this.directionList = [];
  }
}
