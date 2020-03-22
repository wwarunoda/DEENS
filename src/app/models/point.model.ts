export interface Point {
    accX?: number;
    accY?: number;
    accZ?: number;
    cnt?: number;
    lapTime?: number;
    currentSpeed?: number;
    currentSpeedX?: number;
    currentSpeedY?: number;
    currentSpeedZ?: number;
    speedChange?: number;
    speedChangeZ?: number;
    gpsSpeed?: number;
    accErrorX?: number;
    accErrorY?: number;
    accErrorZ?: number;
    errorSpeed?: number;
    errorSpeedZ?: number;
    gpsCurrentSpeed?: number;
    isGPSEnable?: boolean;
    isSetError?: boolean;
}