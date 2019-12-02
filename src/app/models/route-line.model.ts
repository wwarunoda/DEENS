import { LatLngModel } from './lat-lng.model';
import { InstructionsModel } from './instructions.model';

export class RouteLineModel {
    _line: {
        _route: {
            coordinates: LatLngModel,
            instructions: InstructionsModel
        }
    }
}