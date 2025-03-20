import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet';


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
    setView([ 40.416729,  -3.703339], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([ 40.416729, -3.703339], {
      icon: L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize:     [24, 39],
        iconAnchor:   [16, 87],
        popupAnchor:  [-3, -76]
      })
    } ).addTo(this.map).bindPopup("Madrid").openPopup();
  }

}
