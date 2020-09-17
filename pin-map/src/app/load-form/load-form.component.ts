import { Component, OnInit, ViewChild, ElementRef, NgZone, QueryList, ViewChildren } from '@angular/core';
import { MapsAPILoader, AgmMarker } from '@agm/core';
//import {MouseEvent} from "@agm/core";
import { FormGenerator } from './../services/formGenerator/formGenerator.interface'
import { GeoServiceService } from '../services/geoService/geo-service.service';

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
  pruebaItems: {title: String, latitude: Number, longitude: Number, zoom: Number, address: String}[]
  @ViewChildren('search') searchElementRef: QueryList<ElementRef>
  //public searchElementRef: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geoService: GeoServiceService
  ) {
    this.formLoaded = [] as FormGenerator[]
    this.form = [] as any[];

    this.pruebaItems = [{},{}]  as  {title: String, latitude: Number, longitude: Number, zoom: Number, address: String}[]
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.searchElementRef.toArray()
    for(let j = 0; j < this.pruebaItems.length; j++) {
      this.initGeoServiceCatchCoords(j)
    }
  }

  initGeoServiceCatchCoords(index) {
    this.geoService.setCurrentLocation()
    .then((geoCoords: any) => {
      if(geoCoords && geoCoords.lat) {
        this.pruebaItems[index].latitude = geoCoords.lat;
        this.pruebaItems[index].longitude = geoCoords.lng;
        this.pruebaItems[index].zoom = geoCoords.zoom;
        this.pruebaItems[index].address = geoCoords.address;
      }
      return geoCoords
    })  .then(async () => {
      this.geoService.initPlace().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef['_results'][index].nativeElement);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.pruebaItems[index].latitude = place.geometry.location.lat();
            this.pruebaItems[index].longitude = place.geometry.location.lng();
            this.pruebaItems[index].zoom = 12;
            this.geoService.getAddressPromise(this.pruebaItems[index].latitude, this.pruebaItems[index].longitude).then((address) => {
              this.address = address['formatted_address']
              this.pruebaItems[index].address = address['formatted_address']
              console.log('address on search: ', address['formatted_address'])
            })
          })
        })
      })
    })
  }

  dragPin($event: any, index) {
    this.geoService.markerDragEnd($event).then((data) => {
      this.pruebaItems[index].latitude = data.lat;
      this.pruebaItems[index].longitude = data.lng;
      this.pruebaItems[index].zoom = data.zoom;
      this.pruebaItems[index].address = data.address
    })
  }

  onMapReady(map) {
    const drawingManager = this.geoService.initDrawingManager(map);
    google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
      console.log('poligono', event)
      // Polygon drawn
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        //this is the coordinate, you can assign it to a variable or pass into another function.
           //alert(event.overlay.getPath().getArray());
           console.log('coords: ', event.overlay.getPath().getArray()[0].lat())
      }
    });
  }

  

  sendForm() {
    console.log('info: ', this.form)
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
