import { Component, OnInit, ViewChild, ElementRef, NgZone, QueryList, ViewChildren, AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MapsAPILoader, AgmMarker } from '@agm/core';
// import {MouseEvent} from "@agm/core";
import { FormGenerator, FeatureGeoJSON, OptLocation, Payload } from './../services/formGenerator/formGenerator.interface'
import { GeoServiceService } from '../services/geoService/geo-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from '../services/firestore/firestore.service'
import { User } from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-load-form',
  templateUrl: './load-form.component.html',
  styleUrls: ['./load-form.component.css']
})
export class LoadFormComponent implements OnInit, AfterViewInit, OnChanges {
  formLoaded: FormGenerator[];
  form: any[]

  title: string;
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
  alertFlag: boolean;
  formTrue: NgForm
  @ViewChildren('search') searchElementRef: QueryList<ElementRef>
  // public searchElementRef: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private geoService: GeoServiceService,
    private afAuth: AngularFireAuth,
    private actRoute: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService
  ) {
    this.formLoaded = [] as FormGenerator[]
    this.form = [] as any[];
    this.flag = false;
    this.pruebaItems = [] as OptLocation[]
    this.totalPositions = 0;
    this.payload = [] as Payload[]
    console.log('nuevo template: ', this.actRoute.snapshot.paramMap.get('template'))
    const template = this.actRoute.snapshot.paramMap.get('template');
    this.title = this.actRoute.snapshot.paramMap.get('name');
    this.loadForm(template)
    this.alertFlag = false;
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

  getGeoPolynos() {
    this.searchElementRef.toArray()
    console.log('index: ', this.pruebaItems)
    for (let j = 0; j < this.pruebaItems.length; j++) {
      this.initGeoServiceCatchCoords(j)
    }
  }

  async loadForm(form: any) {
    this.flag = true
    let flagGeo = true;
    for (let field of JSON.parse(form)) {
      console.log('field', field);
     
      this.form.push({ carga: { [field.fieldName]: field.fieldDefaultValue ? field.fieldDefaultValue: field.fieldName } });
      if(field.fieldType == 'GeoPolygon') {
        flagGeo = true;
        await this.returnCurrentLocation(field.fieldLabel);
        this.formLoaded.push(Object.assign(field, {geoJson: this.geocordsGlobal}) as FormGenerator)
      } else {
        this.formLoaded.push(field as FormGenerator)
      }
    }
    if(flagGeo) {
      this.getGeoPolynos();
      console.log('formLoaded: ', this.formLoaded)
      console.log('form: ', this.form)
      console.log('pruebaitems after form: ', this.pruebaItems)
      this.totalPositions = this.pruebaItems?.length;
    }
    
    this.flag = false;
    
  }

  sendForm(form: NgForm) {
    this.formTrue = form;
    console.log('payload before: ', this.payload)
    for(const item of this.formLoaded) {
      if( item.fieldType !== 'GeoPolygon'){
        for( let i = 0; i < this.form.length; i ++) {
          const objKey = Object.keys(this.form[i].carga)
          console.log('preval: ', this.form[i])
          this.payload[objKey.toString().toLowerCase()] = Object.values(this.form[i].carga)[0];
        }
      }
    }

    this.pruebaItems.forEach((obj, index) => {
      this.payload[obj.title.toString().toLowerCase()] = {geoJSON: obj};
    })

    this.payload['created_at'] = new Date();
    this.payload['created_by'] = this.user.uid;
    console.log('payload: ', this.payload)

    console.log('payload length: ', this.payload?.length)
  }

  sendToFB() {
    const send = this.firestoreService.create('answers', {answer : [{...this.payload}], formName: this.title})
    console.log('formulario enviado', send)
    this.alertFlag = true;
    setTimeout(() => {
      this.alertFlag = false;
    }, 3000)
    //this.formTrue.reset()
    this.clearForm();
  }

  downloadForm() {
    const data = {answer: JSON.stringify(Object.assign({}, this.payload)), formName: this.title}
    const dlAnchorElem = document.createElement('a');
    document.body.appendChild(dlAnchorElem);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', 'response_' + this.title + '.json');
    dlAnchorElem.click();
    this.alertFlag = true;
    setTimeout(() => {
      this.alertFlag = false;
    }, 3000)
    //this.formTrue.reset()
    this.clearForm();
  }

  clearForm() {
    for(const item of this.formLoaded) {
      if( item.fieldType !== 'GeoPolygon'){
        for( let i = 0; i < this.form.length; i ++) {
          console.log('limpiando: ', this.form[i])
          this.form[i].carga[item.fieldName] = null;
        }
      }
    }
  }

  sendAndDownload() {
    this.sendToFB();
    this.downloadForm();
  }

}
