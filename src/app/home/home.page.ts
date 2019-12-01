import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var device;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    document.addEventListener('deviceready', function () {
      alert(device.platform);
    }, false);
  }
  
  leaflet() {
    this.router.navigate(['leaflet']);
  }

  acceleration() {
    this.router.navigate(['acceleration']);
  }

}
