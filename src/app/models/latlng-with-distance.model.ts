import { LatLngModel } from './lat-lng.model';

export interface LatlngWithDistanceModel extends LatLngModel {
    distance: number;
}