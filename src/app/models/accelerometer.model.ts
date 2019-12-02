import { Point } from './point.model';

export abstract class AccelerometerModel {
    lastX: number;
    lastY: number;
    lastZ: number;
    abstract getPoint(): Point;

}