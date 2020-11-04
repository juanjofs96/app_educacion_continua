import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  private listCursos =[]
  
  constructor() { }
  ngOnInit() {
    this.getCursos();
  }
  getCursos() {
    var self = this;
    $.getJSON( "https://prueba-63695.firebaseio.com/cursos.json", function(data) {
      self.listCursos=data;
    })
  }

}
