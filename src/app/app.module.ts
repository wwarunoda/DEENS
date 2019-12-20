import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

import { LeafletComponent } from './components/leaflet/leaflet.component';
import { AccelerationComponent } from './components/acceleration/acceleration.component';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent,
    AccelerationComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmailComposer,
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Gyroscope,
    DeviceMotion,
    SQLite,
    SQLitePorter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
