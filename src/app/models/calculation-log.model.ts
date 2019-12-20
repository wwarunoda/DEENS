export interface CalculationLogModel { 
    accX: number;
    accY: number;
    accZ: number;
    currentSpeed: number;
    currentSpeedZ: number;
    startTime: Date;
    speedChange: number;
    speedChangeZ: number;
    accErrorX: number;
    accErrorY: number;
    accErrorZ: number;
    errorSpeed: number;
    errorSpeedZ: number;
    gpsSpeed: number;
}