import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocalizacionLeafletPage } from './geolocalizacion-leaflet.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocalizacionLeafletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocalizacionLeafletPageRoutingModule {}
