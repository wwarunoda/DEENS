import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { AccelerationComponent } from './components/acceleration/acceleration.component';
import { WorkComponent } from './components/Work/work.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'leaflet',
    component: LeafletComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'acceleration',
    component: AccelerationComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
