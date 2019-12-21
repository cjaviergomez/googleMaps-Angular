// just an interface for type safety.
import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  // google maps zoom level
  zoom = 10;

   // initial center position for the map
   lat = 51.673858;
   lng = 7.815982;

   clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked(event: MouseEvent) {
    const nuevoMarcador = new Marcador(event.coords.lat, event.coords.lng);
    this.marcadores.push(nuevoMarcador);
  }

  markerDragEnd(m: Marcador, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  constructor() {
    const nuevoMarcador = new Marcador(this.lat, this.lng);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {
  }

}
