import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { isPlatformBrowser } from '@angular/common';
import { MapService } from '../../services/map.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  center: google.maps.LatLngLiteral;
  markerPositions: google.maps.LatLngLiteral[];
  markerOptions: google.maps.MarkerOptions[];
  infoWindows: any[];
  selectedInfoWindow: any = { position: null, title: null, range: null };
  zoom: number;
  constructor(@Inject(PLATFORM_ID) private platformId, private mapService: MapService, private modalService: ModalService) {
  }

  closeFunc() {
    this.modalService.close('item-popup');
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
    const { zoom, markerPositions, markerOptions, infoWindows } = this.mapService.initMap();
    this.zoom = zoom;
    this.markerPositions = markerPositions;
    this.markerOptions = markerOptions;
    this.infoWindows = infoWindows;
  }

  openInfoWindow(marker: MapMarker, index: number) {
    this.selectedInfoWindow = this.infoWindows[index];
    this.infoWindow.open(marker);
  }
}
