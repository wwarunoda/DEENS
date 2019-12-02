import { LatlngWithDistanceModel } from './latlng-with-distance.model';
import { InstructionsModel } from './instructions.model';

export class InstructionsWithDistancesModel {
    latlngWithDistanceList: LatlngWithDistanceModel[];
    instruction: InstructionsModel;
    totalDistance: number;
}