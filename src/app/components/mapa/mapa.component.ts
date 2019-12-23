import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// modelo
import { Marcador } from '../../classes/marcador.class';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  marcadores: Marcador[] = [];

  // google maps zoom level
  zoom = 10;

   // initial center position for the map
   lat = 51.673858;
   lng = 7.815982;

   constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
    if ( localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores'));
    }
   }

  mapClicked(event: MouseEvent) {
    const nuevoMarcador = new Marcador(event.coords.lat, event.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000});
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(index: number) {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000});
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(!result) {
        return;
      }
      marcador.titulo = result.titulo;
      marcador.descripcion = result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000});

    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }


  markerDragEnd(m: Marcador, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


}
