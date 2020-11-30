import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import * as $ from "jquery";
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  private listNotificaciones = []
  constructor(private App: AppComponent, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.listNotificaciones = []
    if (this.App.id_User != null) {
      this.getNotificaciones();
    }
  }
  async getNotificaciones() {
    var self = this;
    var data = {
      "id": this.App.id_User
    }
    await $.post(environment.url+"/api/notificaciones_participante/", data).done(function (notificacion) {
      if (!notificacion.error) {
        self.listNotificaciones = notificacion.notificaciones
        for(let i=0; i< self.listNotificaciones.length;i++){
          self.listNotificaciones[i].imagen=environment.url+self.listNotificaciones[i].imagen
        }
      }
      else {
        self.alertNotificacion(notificacion.mensaje)
      }

    })

  }

  async alertNotificacion(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      subHeader: 'Sin Notificaciones',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
