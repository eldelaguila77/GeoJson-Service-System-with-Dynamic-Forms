import { Injectable, Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMarker } from '@agm/core';
import { Coords } from './coords.interface';

@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {
  geoCoords: Coords;
  private geoCoder;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.geoCoords = {} as Coords;
  }

  initPlace(search: ElementRef) {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(search.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.geoCoords.lat = place.geometry.location.lat();
          this.geoCoords.lng = place.geometry.location.lng();
          this.geoCoords.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geoCoords.lat = position.coords.latitude;
        this.geoCoords.lng = position.coords.longitude;
        this.geoCoords.zoom = 8;
        this.getAddress(this.geoCoords.lat, this.geoCoords.lng);
      });
    }
  }

  markerDragEnd($event: any) {
    console.log('evnets: ', $event.latLng.lat());
    this.geoCoords.lat = $event.latLng.lat();
    this.geoCoords.lng = $event.latLng.lng();
    this.getAddress(this.geoCoords.lat, this.geoCoords.lng);
  }

  getAddress(latitude, longitude) {
    console.log('coords: ', latitude, longitude)
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.geoCoords.zoom = 12;
          this.geoCoords.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }


}
