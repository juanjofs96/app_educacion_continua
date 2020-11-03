import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  private listCursos=[{titulo:"Ofimática Básica",imagen:"https://static1.abc.es/media/tecnologia/2020/02/25/excel-kbVE--620x349@abc.jpg",fecha:"Noviembre 2,2020",estado:"Finalizado"},
  {titulo:"Ofimática Básica",imagen:"https://static1.abc.es/media/tecnologia/2020/02/25/excel-kbVE--620x349@abc.jpg",fecha:"Noviembre 2,2020",estado:"Finalizado"},
  {titulo:"Ofimática Básica",imagen:"https://static1.abc.es/media/tecnologia/2020/02/25/excel-kbVE--620x349@abc.jpg",fecha:"Noviembre 2,2020",estado:"Finalizado"},
  {titulo:"Ofimática Básica",imagen:"https://static1.abc.es/media/tecnologia/2020/02/25/excel-kbVE--620x349@abc.jpg",fecha:"Noviembre 2,2020",estado:"Finalizado"}]
  constructor() { }

  ngOnInit() {
  }

}
