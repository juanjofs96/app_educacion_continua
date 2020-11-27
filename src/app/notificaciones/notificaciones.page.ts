import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import * as $ from "jquery";

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  private listNotificaciones = []
  private find:boolean;
  constructor(private App: AppComponent, private alertController: AlertController,private router:Router) { }

  ngOnInit() {
  }



  
  ionViewDidEnter() {
    this.listNotificaciones = []
    this.find=false;
    if(this.App.id_User!=null) {
      this.getCursos();
    }
  }
  async getCursos() {
    var self = this;
    await $.getJSON("https://prueba-63695.firebaseio.com/cursos.json", function (data_cursos) {
      $.getJSON("https://prueba-63695.firebaseio.com/usuarios.json", function (data_users) {
        for (let i = 0; i < data_users.length; i++) {
            for (let j = 0; j < data_cursos.length; j++) {
              if (data_users[i].id_user == data_cursos[j].id_user && data_users[i].id_user == self.App.id_User) {
                self.listNotificaciones.push(data_cursos[j]);
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
