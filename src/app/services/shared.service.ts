import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  lat: number = 0;
  lng: number = 0;
  speed: number = 0;

  constructor() { }

}
