import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  datos: FormData;
  file: any;
  nombres: string;
  apellidos: string;
  correo: string;
  clave: string;
  genero: string;
  direccion: string;
  celular: string;
  imagen:any;
  showpassword: boolean;
  showpassword2: boolean;
  activo: boolean;
  showLoader: boolean;
  constructor(private App: AppComponent, private alertController: AlertController,private router: Router) {
    $('input[type=file]').val('');
  }


  ionViewDidEnter() {

    if (this.App.id_User != null) {
      this.activo=true;
      this.obtenerDatos()
    }

  }

  async obtenerDatos() {
    var self = this;
    await $.getJSON(environment.url + "/api/participante/" + this.App.id_User + "/", function (res) {
      self.imagen=res.imagen;
      self.nombres = res.nombres;
      self.apellidos = res.apellidos;
      self.correo = res.correo;
      self.direccion = res.direccion;
      self.clave = res.password;
      self.celular = res.telefono;
      self.genero = res.genero;
    })
  }


  actualizar() {

    this.showProgressBar();
    var self = this;
    this.datos = new FormData;
    this.file == null ? null : this.datos.append("imagen", this.file);
    this.datos.append("nombres",this.nombres);
    this.datos.append("apellidos",this.apellidos);
    this.datos.append("direccion",this.direccion);
    this.datos.append("correo",this.correo);
    this.datos.append("password",this.clave);
    this.datos.append("telefono",this.celular);
    this.datos.append("genero",this.genero);


    $.ajax({
      url: environment.url + "/api/participante/" + this.App.id_User + "/",
      enctype: 'multipart/form-data',
      processData: false,
      contentType: false,
      data: self.datos,
      type: 'PATCH',
      success: function (res) {
        self.alertPerfil("Actualización correcta", "Sus datos fueron actualizados correctamente");
        self.hideProgressBar();
      },
      error: function (error) {
        self.alertPerfil("Error al actualizar", "No se pudo actualizar sus datos");
        self.hideProgressBar();
      }
    });
  }

  editar() {
    this.activo = false
  }

  showProgressBar() {
    this.showLoader = true;
  }

  hideProgressBar() {
    this.showLoader = false;
  }


  togglePasswordText() {
    this.showpassword = !this.showpassword;
  }

  togglePasswordText2() {
    this.showpassword2 = !this.showpassword2;
  }

  uploadImage(input) {
    if (input.target.files && input.target.files[0]) {
      this.file = input.target.files[0]
      this.imagen= (window.URL ? URL : webkitURL).createObjectURL(this.file);
    }
  }

  async alertPerfil(msg: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: msg,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async eliminar() {
    var self=this;
    const alert = await this.alertController.create({
      header: 'Su cuenta se eliminará',
      message: '¿Está seguro de eliminar su cuenta?',
      backdropDismiss: false,
      buttons: [{
        text: 'NO', handler: () => {
        }
      }, {
        text: 'SI', handler: () => {
          $.ajax({
            url: environment.url + "/api/participante/" + this.App.id_User + "/",
            type: 'DELETE',
            success: function (res) {
              self.alertPerfil("Cuenta eliminada", "Su cuenta fue eliminada exitosamente");
              self.cerrarSesion();

            },
            error: function (error) {
              self.alertPerfil("Error al eliminar", "No se pudo eliminar su cuenta");
            }
          });
        }
      }]
    });
    await alert.present();
  }

  cerrarSesion(){
    this.App.storage.set("id", null);
    this.App.estadoUser = false;
    this.App.id_User = null;

    for (let i = 0; i < this.App.listMenu.length; i++) {
      i == 3 ? this.App.listMenu[i].disable = false : this.App.listMenu[i].disable = true;
    }

    for (let i = 0; i < this.App.listTabs.length; i++) {
      i == 0 ? this.App.listTabs[i].disable = false : this.App.listTabs[i].disable = true;
    }

  }

}
