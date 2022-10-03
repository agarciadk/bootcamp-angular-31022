import { Component, Input } from '@angular/core';
import { Alumno } from '../alumno/alumno';

@Component({
  selector: 'centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent {
  title = 'Centro';
  alumnos!: Alumno[];
  name: string = '';
  activo: boolean = false;

  constructor() { 
    this.alumnos = [
      new Alumno('Ana', true),
      new Alumno('Juan', true),
      new Alumno('Pedro', false),
      new Alumno('Luis', true)
    ];
  }

  mensajeAviso(mensaje: string) {
    console.log(mensaje)
  }

  addAlumno() {
    this.alumnos.push(new Alumno(this.name, this.activo));
  }

  removeAlumno(alumno: Alumno) {
    this.alumnos = this.alumnos.filter(a => a !== alumno);
  }
}
