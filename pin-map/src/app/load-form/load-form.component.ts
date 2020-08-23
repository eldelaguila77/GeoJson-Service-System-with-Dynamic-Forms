import { Component, OnInit, ViewChild, ElementRef, NgZone, QueryList, ViewChildren } from '@angular/core';
import { MapsAPILoader, AgmMarker } from '@agm/core';
//import {MouseEvent} from "@agm/core";
import { FormGenerator } from './../services/formGenerator/formGenerator.interface'

@Component({
  selector: 'app-load-form',
  templateUrl: './load-form.component.html',
  styleUrls: ['./load-form.component.css']
})
export class LoadFormComponent implements OnInit {
  formLoaded: FormGenerator[];
  form: any[]

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChildren('search') searchElementRef: QueryList<ElementRef>
  //public searchElementRef: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.formLoaded = [] as FormGenerator[]
    //this.formLoaded = [{fieldType:"Text",fieldName:"Nombre aqui",fieldPlaceholder:"kml",fieldDefaultValue:"Eduardo", fieldRequired:true}];
    //this.formLoaded.push()
    this.form = [] as any[];
  }

  ngAfterViewInit() {
    this.searchElementRef.toArray()
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      console.log('element: ', this.searchElementRef)
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef['_results'][0].nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: any) {
    console.log('evnets: ', $event.latLng.lat());
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    console.log('coords: ', latitude, longitude)
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  sendForm() {
    console.log('info: ', this.form)
    this.setCurrentLocation()
  }

  fileJsonInput() {
    let input, file, fr;

    if (typeof FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileJsonInput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      //fr.onload = receivedText;
      fr.onload = (e) => {
        const preText = e.target.result;
        //this.formLoaded = JSON.parse(preText) 
        for (let field of  JSON.parse(preText) )
        {
          this.formLoaded.push(field as FormGenerator)
          //this.form.push(Object.keys({[field['fieldName']]: field['fieldDefaultValue']}))
          //this.form.push(Object.keys(field).map(k => ({[field['fieldName']]: field['fieldDefaultValue']})))
          this.form.push({ carga : {[field['fieldName']] : field['fieldDefaultValue']}})   
          //Object.assign(this.form, ...Object.keys(field).map(k => ({[field['fieldName']]: field['fieldDefaultValue']})));
        }
        console.log('form: ', this.form)
      }
      fr.readAsText(file);
    }

  }
  

}
