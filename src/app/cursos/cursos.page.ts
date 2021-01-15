import { Component} from '@angular/core';
import * as $ from "jquery";
import { AppComponent } from '../app.component';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute} from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage {

  isDisabled:boolean;
  listCursos = []
  constructor(private App: AppComponent, private alertController: AlertController,private router: ActivatedRoute) {
    
  }

  ionViewDidEnter() {
    this.listCursos = []
    console.log(this.App.id_User)
    if (this.App.id_User != null) {
      this.getCursos();
    }
   else{
    this.router.params.subscribe(param => {
      this.getCursosAreas(param['id_area']);
      })
   }
  }
  
  async getCursos() {
    var data = {"id_participante":this.App.id_User}
    var self=this;
    await $.post(environment.url +"/api/cursos_participante/",data).done(function (res) {
      if(!res.error){
      self.listCursos=res.cursos
      for (let i = 0; i < self.listCursos.length; i++) {
        self.listCursos[i].imagen = environment.url + self.listCursos[i].imagen
      }
      }
      else{
        self.alertCurso();
      }
    })
  }

  async getCursosAreas(id_area) {
    var data = {"id_area":id_area}
    var self=this;
    await $.post(environment.url +"/api/areas_eventos/",data).done(function (res) {
      if(!res.error){
      self.listCursos=res.cursos
      
      console.log(self.listCursos)
      for (let i = 0; i < self.listCursos.length; i++) {
        self.listCursos[i].imagen = environment.url + self.listCursos[i].imagen
      }
      }
    })
  }


  async alertCurso() {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Sin cursos registrados',
        message: 'Usted no pertenece a ningún curso',
        buttons: ['OK']
      });
  
      await alert.present();
    }
}