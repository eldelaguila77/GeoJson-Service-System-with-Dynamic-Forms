import { Component, OnInit, ViewChild, ElementRef, NgZone, QueryList, ViewChildren, AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MapsAPILoader, AgmMarker } from '@agm/core';
// import {MouseEvent} from "@agm/core";
import { FormGenerator, FeatureGeoJSON, OptLocation, Payload } from './../services/formGenerator/formGenerator.interface'
import { GeoServiceService } from '../services/geoService/geo-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-form',
  templateUrl: './load-form.component.html',
  styleUrls: ['./load-form.component.css']
})
export class LoadFormComponent implements OnInit, AfterViewInit, OnChanges {
  formLoaded: FormGenerator[];
  form: any[]

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  flag: boolean;
  private geoCoder;
  pruebaItems: OptLocation[]
  geocordsGlobal: any;
  totalPositions: number;
  payload: Payload[]
  user: User
  @ViewChildren('search') searchElementRef: QueryList<ElementRef>
  // public searchElementRef: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geoService: GeoServiceService,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.formLoaded = [] as FormGenerator[]
    this.form = [] as any[];
    this.flag = false;
    this.pruebaItems = [] as OptLocation[]
    this.totalPositions = 0;
    this.payload = [] as Payload[]
  }

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if (user){
        console.log('user1: ', user)
        this.user = user;
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

  ngAfterViewInit() {
   
    
  }

  returnCurrentLocation(title: string) {
    return this.geoService.setCurrentLocation()
      .then((geoCoords: any) => {
        console.log('geocords init: ', geoCoords)
        const object = {title: title,latitude: geoCoords.lat, longitude: geoCoords.lng, zoom: geoCoords.zoom, address: geoCoords.address}
        this.geocordsGlobal = object;
        this.pruebaItems.push(object)

        return geoCoords
      })
  }

  initGeoServiceCatchCoords(index) {
    this.geoService.setCurrentLocation()
      .then((geoCoords: any) => {
        if (geoCoords && geoCoords.lat) {
          this.pruebaItems[index].latitude = geoCoords.lat;
          this.pruebaItems[index].longitude = geoCoords.lng;
          this.pruebaItems[index].zoom = geoCoords?.zoom;
          this.pruebaItems[index].address = geoCoords.address;
        }
        return geoCoords
      }).then(async () => {
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
              console.log('pruebaitem busqueda: ', this.pruebaItems)
            })
          })
        })
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes)
  }

  dragPin($event: any, index) {
    console.log('form on dragpin: ', this.form)
    console.log('formloaded on dragpin: ', this.formLoaded)
    console.log('pruebaitems on dragpin: ', this.pruebaItems)
    console.log('dragpin: ', $event)
    console.log('index dragping: ', index)
    this.geoService.markerDragEnd($event).then((data) => {
      console.log('dragpin endmarker: ', data);
      this.pruebaItems[index].latitude = data.lat;
      this.pruebaItems[index].longitude = data.lng;
      this.pruebaItems[index].zoom = data.zoom;
      this.pruebaItems[index].address = data.address



      this.pruebaItems[index].geoPolygon = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [{lng: data.lng, lat: data.lat}]
        },
        properties: {
          name: this.pruebaItems[index]?.title,
          address: this.pruebaItems[index]?.address
        }
      }
    })
  }

  onMapReady(map, j: number) {
    const drawingManager = this.geoService.initDrawingManager(map);
    google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
      console.log('poligono', event)
      // Polygon drawn
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        //this is the coordinate, you can assign it to a variable or pass into another function.
        //alert(event.overlay.getPath().getArray());
        let coords = [] as {lng: number, lat: number}[]
        console.log('coords: ', event.overlay.getPath().getArray()[0].lat())
        for(let c of event.overlay.getPath().getArray()) {
          console.log('coord lat: ', c.lat())
          console.log('coord lng: ', c.lng())
          coords.push({lng: c.lng(), lat: c.lat()})
        }
        this.pruebaItems[j].geoPolygon = {
          type: 'Feature',
          geometry: {
            type: event?.type,
            coordinates: coords
          },
          properties: {
            name: this.pruebaItems[j]?.title,
            address: this.pruebaItems[j]?.address
          }
        }
        
        console.log('pruebasitems onmapready: ', this.pruebaItems)
      }
    });
  }



  sendForm() {
    console.log('info: ', this.form)
    console.log('pruebaitems: ', this.pruebaItems)
    console.log('formloaded: ', this.formLoaded)
    for(const item of this.formLoaded) {
      for( let i = 0; i < this.form.length; i ++) {
        console.log('preval: ', this.form[i])
        const objKey = Object.keys(this.form[i].carga)
        console.log('objKey: ', objKey)
        if(item.fieldName.toLowerCase() == objKey.toString().toLowerCase()) {
          

          this.pruebaItems.forEach((land, index) => {
            if ( land.title.toLowerCase() ==  item.fieldName.toLowerCase()) {
              this.payload[objKey.toString()] = this.payload['geoJSON'] = this.pruebaItems[index]?.geoPolygon;
            } else {
              this.payload[objKey.toString()] = Object.values(this.form[i].carga)[0];
            }
          })


          /*if (this.pruebaItems[i]?.title.toLowerCase() == ) {
            this.payload[objKey.toString()] = this.payload['geoJSON'] = this.pruebaItems[i]?.geoPolygon;
          } else {
            this.payload[objKey.toString()] = Object.values(this.form[i].carga)[0];
          }
          console.log('payload: ', this.payload)*/
        } /*else {
          this.payload[objKey.toString()] = Object.values(this.form[i].carga)[0];
        }*/
      }
    }
    console.log('payload: ', this.payload)
  }

  async fileJsonInput() {
    this.flag = true;
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
      // fr.onload = receivedText;
      fr.onload = async (e) => {
        const preText = e.target.result;
        // this.formLoaded = JSON.parse(preText)
        for (let field of JSON.parse(preText)) {
          console.log('field', field);
         
          // this.form.push(Object.keys({[field['fieldName']]: field['fieldDefaultValue']}))
          // this.form.push(Object.keys(field).map(k => ({[field['fieldName']]: field['fieldDefaultValue']})))
          this.form.push({ carga: { [field.fieldName]: field.fieldDefaultValue ? field.fieldDefaultValue: field.fieldName } });
          // Object.assign(this.form, ...Object.keys(field).map(k => ({[field['fieldName']]: field['fieldDefaultValue']})));
          if(field.fieldType == 'GeoPolygon') {
            /*this.searchElementRef.toArray()
            for (let j = 0; j < this.pruebaItems.length; j++) {
              this.initGeoServiceCatchCoords(j)
            }*/
            await this.returnCurrentLocation(field.fieldLabel);
            this.formLoaded.push(Object.assign(field, {geoJson: this.geocordsGlobal}) as FormGenerator)
          } else {
            this.formLoaded.push(field as FormGenerator)
          }
        }
        
        this.getGeoPolynos();
        console.log('formLoaded: ', this.formLoaded)
        console.log('form: ', this.form)
        console.log('pruebaitems after form: ', this.pruebaItems)
        this.totalPositions = this.pruebaItems?.length;
      }
      fr.readAsText(file);
    }
    console.log('file', file, fr);
  }

  getGeoPolynos() {
    this.searchElementRef.toArray()
    console.log('index: ', this.pruebaItems)
    for (let j = 0; j < this.pruebaItems.length; j++) {
      this.initGeoServiceCatchCoords(j)
    }
  }

}
