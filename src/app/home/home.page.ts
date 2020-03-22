import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var device;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isButtonView = true;
  constructor(private router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    document.addEventListener('deviceready', function () {
      alert(device.platform);
    }, false);
  }
  
  leaflet() {
    this.router.navigate(['leaflet']);
    this.isButtonView = false;
  }

  work() {
    this.router.navigate(['work']);
    this.isButtonView = false;
  }

  acceleration() {
    this.router.navigate(['acceleration']);
    this.isButtonView = false;
  }

}
