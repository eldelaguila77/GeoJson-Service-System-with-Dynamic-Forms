import { Injectable, Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMarker } from '@agm/core';
import { Coords } from './coords.interface';

@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {
  geoCoords: Coords;
  public geoCoder;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.geoCoords = {} as Coords;
  }

  initPlace(){
    //load Places Autocomplete
    return this.mapsAPILoader.load()
  }


  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject );
    });
  }
  // Get Current Location Coordinates
  setCurrentLocation(): Promise<any> {
    return new Promise(async (resolve) => {
      if ('geolocation' in navigator) {
        this.getPosition().then((position: any) => {
          this.geoCoords.lat = position.coords.latitude;
          this.geoCoords.lng = position.coords.longitude;
          this.geoCoords.zoom = 8;
          return this.geoCoords
        })
        .then(async (coords) => {
          return this.mapsAPILoader.load().then(() => {
            return new Promise(async (resolve) => {
              this.geoCoder = new google.maps.Geocoder;
              resolve(this.geoCoder)
            })
           
          })
        })
        .then(async (coords: any) => {
          return await this.getAddressPromise(this.geoCoords.lat, this.geoCoords.lng)
          
        })
        .then(async (coords) => {
          resolve(this.geoCoords)
        })
      } 
    })
  }

  async markerDragEnd($event: any) {
    this.geoCoords.lat = $event.latLng.lat();
    this.geoCoords.lng = $event.latLng.lng();
    await this.getAddressPromise(this.geoCoords.lat, this.geoCoords.lng)
    return this.geoCoords
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.RECTANGLE
        ]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
    return drawingManager
  }

  public getAddressPromise = (latitude, longitude) =>  new Promise((resolve, reject) => {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      
      if (status === 'OK') {
        if (results[0]) {
          this.geoCoords.zoom = 12;
          this.geoCoords.address = results[0].formatted_address;
          resolve(results[0])
        } else {
          window.alert('No results found');
          reject(new Error('No results found'))
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
        reject(new Error('Geocoder failed due to: ' + status))
      }

    });
  })


}
