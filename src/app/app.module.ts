import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCIvtNU8h3OJN4eNPeRESs76WOfyhfnZqQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
