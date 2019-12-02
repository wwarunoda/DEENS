import { Injectable } from '@angular/core';

import { LatLngModel } from '../models/lat-lng.model';
import { InstructionsModel } from '../models/instructions.model';
import { LatlngWithDistanceModel } from '../models/latlng-with-distance.model';
import { InstructionsWithDistancesModel } from '../models/instructions-with-distances.model';
import { LatLngCalculationsService } from './lat-lng-calculations.service';

@Injectable({
  providedIn: 'root'
})

export class LatLngService {

  constructor(private latlngCalculationService: LatLngCalculationsService) { }

  getDistanceMap(waypoints: any): InstructionsWithDistancesModel[] {
    let latlngWithDistanceList: LatlngWithDistanceModel[];
    let instructionsWithDistancesList: InstructionsWithDistancesModel[];

    const coordinateList: LatLngModel[] = waypoints._line._route.coordinates;
    const instructions: InstructionsModel[] = waypoints._line._route.instructions;

    latlngWithDistanceList = this.getDistanceSummatonList(coordinateList); // Get distance from start latlng to each latlng
    // Get list of instructions with relevant latlngs
    instructionsWithDistancesList = this.getInstructoinsWithLatLng(instructions, latlngWithDistanceList);

    return instructionsWithDistancesList;
  }

  private getDistanceSummatonList(coordinateList: LatLngModel[]): LatlngWithDistanceModel[] {
    let latlngDistanceSum = 0;
    let latlngFirst: LatLngModel;
    let latlngSecond: LatLngModel;
    let filledLatLngList: LatlngWithDistanceModel[] = [];
    let latlngWithDistanceList: LatlngWithDistanceModel[] = [];

    for (let i = 0; i < coordinateList.length - 1; i++) {
      latlngFirst = coordinateList[i];
      latlngSecond = coordinateList[i + 1];

      filledLatLngList = this.fillPathWithLatLng(latlngFirst, latlngSecond, latlngDistanceSum);

      latlngDistanceSum = filledLatLngList[filledLatLngList.length - 1].distance;

      latlngWithDistanceList = [...latlngWithDistanceList, ...filledLatLngList];
    }

    return latlngWithDistanceList;
  }

  private fillPathWithLatLng(latlngFirst: LatLngModel, latlngSecond: LatLngModel, distanceSumation: number): LatlngWithDistanceModel[] {
    const stepDistance = 1;
    let totDistance: number = distanceSumation;
    let latlng: LatLngModel;
    let latlngWithDistanceList: LatlngWithDistanceModel[] = [];
    const latlngDistance = this.latlngCalculationService.getDistanceFromLatLon(latlngFirst, latlngSecond);

    let calculationRounds: number = (latlngDistance / stepDistance);
    calculationRounds = calculationRounds - (calculationRounds % 1);
    const remainingDistance: number = latlngDistance % stepDistance;
    const azimuth = this.latlngCalculationService.calculateBearing(latlngFirst, latlngSecond);
    if (latlngDistance > stepDistance) {
      for (let i = 1; i <= calculationRounds; i++) {
        totDistance += stepDistance;
        /* latlng =
        this.latlngCalculationService.latlngFindByDistance({lat: latlngFirst.lat, lng: latlngFirst.lng, distance: (stepDistance * i)}); */
        // console.log(latlng);
        latlng = this.latlngCalculationService.getDestinationLatLong(latlngFirst, azimuth, (stepDistance * i));
        // console.log(latlng);
        latlngWithDistanceList = [...latlngWithDistanceList, {lat: latlng.lat, lng: latlng.lng, distance: totDistance}];
      }

      latlngWithDistanceList
      = [...latlngWithDistanceList, {lat: latlngSecond.lat, lng: latlngSecond.lng, distance: ( totDistance + remainingDistance )}];

      return latlngWithDistanceList;
    } else {
        return [{lat: latlngFirst.lat, lng: latlngFirst.lng, distance: ( totDistance + latlngDistance )}];
    }
  }

  private getInstructoinsWithLatLng(instructions: InstructionsModel[], latlngWithDistanceList:
    LatlngWithDistanceModel[]): InstructionsWithDistancesModel[] {
    let previusDistance = 0;
    let instructionsWithDistancesList: InstructionsWithDistancesModel[] = [];
    let selectedDistanceList: LatlngWithDistanceModel[];
    let instructionsWithDistances: InstructionsWithDistancesModel;

    instructions.forEach(element => {
      // Filter and get the latlng list for each waypoint
      selectedDistanceList = latlngWithDistanceList.filter(m => {
        if (previusDistance !== 0) {
          // Get list of latlng for other waypoints
          return ((previusDistance < m.distance) && (m.distance <= (element.distance + previusDistance)));
        } else {
          return (m.distance <= element.distance); // Get first list of latlng from beginning
        }
      });
      previusDistance += element.distance;

      instructionsWithDistances = {
        instruction: element,
        latlngWithDistanceList: selectedDistanceList,
        totalDistance: previusDistance
      };
      instructionsWithDistancesList = [...instructionsWithDistancesList, instructionsWithDistances];
    });

    return instructionsWithDistancesList;
  }
}
