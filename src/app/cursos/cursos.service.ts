import { Injectable } from '@angular/core';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  constructor() { }

  async getDetalleCurso(id_curso: string) {
    var detalle:any;
    await $.getJSON("https://prueba-63695.firebaseio.com/detalle_cursos.json", function (detalle_cursos) {
      detalle_cursos.find(curso => {
        if (curso.id_curso == id_curso) {
          detalle = curso
        }
      })
    })
    return detalle;
  }
}
