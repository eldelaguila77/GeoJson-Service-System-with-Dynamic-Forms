import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { AgmCoreModule } from '@agm/core';

import { FormCreatorComponent } from './form-creator/form-creator.component';
import { LoadFormComponent } from './load-form/load-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCreatorComponent,
    LoadFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSFuScy4OqVOvWKhVfeIC_EBwQRZnrSjw',
      libraries: ['places']   
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
