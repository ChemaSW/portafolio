import { Component } from '@angular/core';
import { InfoProyectosComponent } from '../info-proyectos-component/info-proyectos-component';

@Component({
  selector: 'proyectos-title-component',
  imports: [
    InfoProyectosComponent
  ],
  templateUrl: './proyectos-title-component.html',
})
export class ProyectosTitleComponent { }
