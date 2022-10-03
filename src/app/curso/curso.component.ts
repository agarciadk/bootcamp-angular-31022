import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  title = 'Curso';
  curso1:Curso;
  curso2:Curso;
  selected:number = 2021;
  cursos:Curso[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.curso1 = new Curso("Curso", 2020);
    this.curso2 = new Curso("Curso", 2021);
    this.cursos = [this.curso1, this.curso2];
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      console.log({ params })
    });
  }

  cambiarCurso() {
    if (this.selected === 2021) this.selected = 2020
    else this.selected = 2021;
  }

}
