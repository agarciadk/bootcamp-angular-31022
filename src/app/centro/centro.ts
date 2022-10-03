import { Alumno } from '../alumno/alumno';

export class Centro {
	name: string;
	alumnos: Alumno[];

	constructor(name: string, alumnos: Alumno[]) {
		this.name = name;
		this.alumnos = alumnos;
	}
}