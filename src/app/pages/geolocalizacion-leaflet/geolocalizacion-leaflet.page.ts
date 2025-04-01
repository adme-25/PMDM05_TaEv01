import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import * as L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-geolocalizacion-leaflet',
  templateUrl: './geolocalizacion-leaflet.page.html',
  styleUrls: ['./geolocalizacion-leaflet.page.scss'],
})
export class GeolocalizacionLeafletPage implements OnInit {

  map: any;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

    this.map = L.map('map').
    setView([ 40.416729,  -3.703339], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([ 39.8581, -4.02263], {
      icon: L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize:     [24, 39],
        iconAnchor:   [16, 87],
        popupAnchor:  [-3, -76]
      })
    } ).addTo(this.map).bindPopup("Toledo").openPopup();

    L.Routing.control({
      waypoints: [
          L.latLng(40.416729, -3.703339),
          L.latLng(39.8581, -4.02263)
      ],
      lineOptions: {
        styles: [{ color: 'blue', weight: 3 }],
        extendToWaypoints: false,
        missingRouteTolerance: 5
      },
    }).addTo(this.map);

    // Oculta el control de ruta al entrar en la pantalla
    var routingContainer = document.querySelector('.leaflet-routing-container') as HTMLElement;
    if (routingContainer) {
      routingContainer.style.display = 'none';
    }
  }
}
