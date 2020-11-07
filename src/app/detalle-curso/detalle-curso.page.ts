import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { ActivatedRoute } from '@angular/router';


const data_asistencias = {
  chart: {
    showpercentvalues: "1",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    showlegend: "0",
    plottooltext:
      "<b>$percentValue</b> de <b>$label</b>",
    centerlabel: "$percentValue",
    theme: "fusion"
  },
  data: null
};

const data_calificaciones = {
  chart: {
    theme: "fusion",
    data: null
  }
};

const data_asistencias_line = {
  chart: {
    theme: "fusion",
    rotatelabels: "1",
    setadaptiveymin: "1",
    data: null
  }
}


@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {
  private chart_asistencias: any;
  private chart_calificaciones: any;
  private chart_asistencias_line: any;
  private detalles: any = "";
  private mostrarAsistencia: boolean;
  private mostrarCalificaciones: boolean;



  constructor(private router: ActivatedRoute, private cursos: CursosService) {
    this.chart_asistencias = data_asistencias;
    this.chart_calificaciones = data_calificaciones;
    this.chart_asistencias_line = data_asistencias_line;
  }

  ngOnInit() {
    this.mostrarAsistencia = true;
    this.mostrarCalificaciones = false;
    this.router.paramMap.subscribe(paramMap => {
      const id_curso = paramMap.get('id_curso');
      this.getDetalle(id_curso);
    })
  }
  

  async getDetalle(id_curso: string) {
    this.detalles = await this.cursos.getDetalleCurso(id_curso);
    this.chart_asistencias.data = this.detalles.data_asistencias;
    this.chart_calificaciones.data = this.detalles.data_calificaciones;
    this.chart_asistencias_line.data=this.detalles.data_asistencias_line;
  }

  segmentChanged(ev: any) {
    if (ev.target.value == "asistencias") {
      this.mostrarAsistencia = true;
      this.mostrarCalificaciones = false;
    }
    if (ev.target.value == "calificaciones") {
      this.mostrarCalificaciones = true;
      this.mostrarAsistencia = false;
    }
  }


}