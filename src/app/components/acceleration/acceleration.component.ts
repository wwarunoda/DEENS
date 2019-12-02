
import { OnInit, Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

import { Point } from '../../models/point.model';
import { MeasurePointService } from '../../services/measure-point.service';
import { Direction } from '../../models/direction.model';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Dev, DatabaseService } from 'src/app/services/database.service';

declare var sensors;

@Component({
  selector: 'app-acceleration',
  templateUrl: './acceleration.component.html',
  styleUrls: ['./acceleration.component.scss'],
})

export class AccelerationComponent implements OnInit {

  /* extend from abstract class */
  logs: Dev[] = [];
  log = {};

  directionList: Direction[] = [];
  currentSpeed = 0;
  currentSign = true;
  currentVelocity: string = null;
  correctVelocitySign: boolean;
  accX = 0;
  accY = 0;
  accZ = 0;

  private cnt = 0;
  private bufferSize = 100;
  private accelerationFrequency = 20;
  private accelerationType = 'LINEAR_ACCELERATION';
  description: any;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private measurePointService: MeasurePointService,
    private db: DatabaseService
  ) {
    this.platform.ready().then(() => {
      this.onSensorChange();
    });
  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getLogs().subscribe(logs => {
          this.logs = logs;
          console.log(logs)
        });
      }
    });
  }
  /**
   * add log to db
   */
  addlog() {
    this.db.addLog(this.description)
      .then(_ => {
        this.log = {};
      });
  }

  /* returrns parameters, using buffer: average acceleration
    since last call of getPoint().
  */
  getPoint(): Point {
    const point: Point = {
      accX: this.accX,
      accY: this.accY,
      accZ: this.accZ,
      cnt: this.cnt,
      accelerationFrequency: this.accelerationFrequency,
      currentSpeed: 0
    }
    return point;
  }

  private onSensorChange() {

    sensors.enableSensor(this.accelerationType);
    setInterval(() => {
      sensors.getState((values) => {
        const localX = values[0];
        const localY = values[1];
        const localZ = values[2];

        this.accX += localX;
        this.accY += localY;
        this.accZ += localZ;

        if (this.cnt < this.bufferSize - 1) {
          this.cnt++;
        } else {
          const tempPoint: Point = this.getPoint();
          this.resetAcc();
          const calSpeed = this.measurePointService.calSpeed(tempPoint);
          // this.currentSpeed = calSpeed ? calSpeed : 0;
          const calDirection: Direction = this.measurePointService.getCurrentDirection();
          this.directionList = [...this.directionList, calDirection];
          if (!this.currentVelocity) {
            this.correctVelocitySign = this.getSignCalculation(calDirection.direction, this.currentSign);
          }
          if (this.correctVelocitySign === calDirection.direction) {
            this.currentSpeed = this.currentSpeed + (calSpeed ? calSpeed : 0);
          } else {
            this.currentSpeed = this.currentSpeed - (calSpeed ? calSpeed : 0);
          }
          this.measurePointService.clearDirectionList();
        }
      });
    }, this.accelerationFrequency);

  }
  getSignCalculation(givenSign: boolean, currentSign: boolean): boolean {
    if (currentSign === givenSign) {
      return true;
    } else {
      return false;
    }
  }
  resetAcc() {
    this.accX = 0;
    this.accY = 0;
    this.accZ = 0;
    this.cnt = 0;
  }

}
