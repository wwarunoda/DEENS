import { Component, OnInit } from '@angular/core';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';

@Component({
  selector: 'app-step-counter',
  templateUrl: './step-counter.component.html',
  styleUrls: ['./step-counter.component.scss'],
})
export class StepCounterComponent implements OnInit {

  constructor(private stepcounter: Stepcounter) { }
  stepCount = 0;
  ngOnInit() {
    const startingOffset = 0;
    this.stepcounter.start(startingOffset).then(onSuccess =>
      console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));

    this.stepcounter.getHistory().then(historyObj =>
      console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));

    this.stepcounter.getStepCount().then(
      (data) => this.stepCount = data);
  }

}
