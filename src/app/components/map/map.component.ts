import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  center: google.maps.LatLngLiteral;
  markerPositions: google.maps.LatLngLiteral[];
  markerOptions: google.maps.MarkerOptions[];
  zoom: number;
  constructor(@Inject(PLATFORM_ID) private platformId) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      }
    }

    this.zoom = 3;
    this.markerPositions = [{
      lat: 47.5738,
      lng: -52.7329
    }, {
      lat: 44.6501,
      lng: -63.5767
    },
    {
      lat: 51.110802,
      lng: -114.039032
    }];
    this.markerOptions = [{ draggable: false, icon: '/assets/images/mun.jpg' },
    { draggable: false, icon: '/assets/images/ntt.jpg' }, { draggable: false, icon: '/assets/images/safeway.jpg' }];
  }
}

