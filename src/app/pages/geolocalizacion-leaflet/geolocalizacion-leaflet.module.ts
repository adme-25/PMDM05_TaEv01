import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MisComponentesModule } from "../../components/mis-componentes.module";

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionLeafletPageRoutingModule } from './geolocalizacion-leaflet-routing.module';

import { GeolocalizacionLeafletPage } from './geolocalizacion-leaflet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionLeafletPageRoutingModule,
    MisComponentesModule
  ],
  declarations: [GeolocalizacionLeafletPage]
})
export class GeolocalizacionLeafletPageModule {}
