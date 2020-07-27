import { Injectable } from '@angular/core';
import { markers} from '../services/map.service.config';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  dataMap = new Map();
  zoomLevel = 3;
  constructor() { }

  initMap() {
    for (const marker of markers){
        const { name } = marker;
        delete marker.name;
        this.dataMap.set(name, marker);
    }

    return this._getInitialMarkerData();
  }

  private _getInitialMarkerData(){
    let markerPositions = [...this.dataMap.values()];
    let markerOptions = markerPositions.map(({marker}) => marker);
    let infoWindows = markerPositions.map(({info}) => info);
    return { markerOptions, markerPositions: markerPositions, zoom: this.zoomLevel, infoWindows };
  }
}
