import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Alumno } from './alumno';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'alumno-component',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  @Input() alumno!: Alumno;
  @Output() avisoEmitter = new EventEmitter<string>();
  @Output() removeEmitter = new EventEmitter<string>();
  // @ViewChild('nombre', { static: true }) nameElement!: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  avisar() { 
    // alert(this.nameElement.nativeElement.value);
    this.avisoEmitter.emit(this.alumno.name);
  }

  remove() {
    // let n = (<HTMLInputElement> document.getElementById('nombre')).value;
    // let n = (document.getElementById('nombre') as HTMLInputElement).value;
    this.removeEmitter.emit(this.alumno.name);
  }

}