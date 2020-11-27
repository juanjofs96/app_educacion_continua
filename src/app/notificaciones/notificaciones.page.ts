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
      this.getNotificaciones();
    }
  }
  async getNotificaciones() {
    var self = this;
    var data={
      "id":this.App.id_User
    }
    await $.post("http://localhost:8000/api/notificaciones_participante/",data).done(function (notificacion) {
    console.log(notificacion)  
    if(!notificacion.error){
          self.listNotificaciones=notificacion.notificaciones
      }
      else{
        self.alertNotificacion(notificacion.mensaje)
      }

    })
    
  }

  async alertNotificacion(mensaje:string) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Sin Notificaciones',
        message: mensaje,
        buttons: ['OK']
      });
  
      await alert.present();
    }
}
