import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AppComponent } from '../app.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage {

  private listCursos = []
  private find;
  constructor(private App: AppComponent, private alertController: AlertController) {
    console.log("id_user " + this.App.id_User);
  }

  ionViewDidEnter() {
    this.listCursos = []
    this.find=false;
    this.getCursos();
   
  }
  async getCursos() {
    var self = this;
    await $.getJSON("https://prueba-63695.firebaseio.com/cursos.json", function (data_cursos) {
      $.getJSON("https://prueba-63695.firebaseio.com/usuarios.json", function (data_users) {
        for (let i = 0; i < data_users.length; i++) {
            for (let j = 0; j < data_cursos.length; j++) {
              if (data_users[i].id_user == data_cursos[j].id_user && data_users[i].id_user == self.App.id_User) {
                self.listCursos.push(data_cursos[j]);
                self.find=true;
              }
            }
        }
        if(!self.find){
          self.alertCurso();
        }
      })
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