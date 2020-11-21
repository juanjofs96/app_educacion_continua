import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private name: string = "";
  private pass: string = "";
  private apellidos: string = "";
  private email: string = "";
  private celular: string = "";
  private email2: string = "";
  private direccion: string = "";
  private id: string = "";
  private genero: string = "";
  private data: any;
  constructor(private alertController: AlertController, private router: Router) {

  }

  ngOnInit() {

  }


  registrar() {
    this.data = {
      nombres: this.name,
      apellidos: this.apellidos,
      identificacion: this.id,
      password: this.pass,
      correo: this.email,
      correo_alternativo: this.email2,
      telefono: this.celular,
      direccion: this.direccion,
      genero: this.genero
    }
    var self = this;
    if (this.validarCampos()) {
      $.post("http://127.0.0.1:8000/api/participante/", this.data)
        .done(function (data) {
          self.alertError("Registro exitoso", "Su cuenta se ha creado exitosamente");
          self.router.navigate(["/educ/home/"]);

        }).fail(function (error) {
          let x = error.responseJSON;
          let isError = false;
          try{
          x["correo"][0] != null || x["correo_alternativo"][0] != null ? self.alertError("Error al registrarse","Introduzca una dirección de correo electrónico válida.") : isError = true;
          x["identificacion"][0] != null ? self.alertError("Error al registrarse", x["identificacion"][0]) : isError = true;
          !isError ? self.alertError("Error al registrarse", "El registro no fue exitoso") : null;
          }catch(ex){
            self.alertError("Error al registrarse", "El registro no fue exitoso");
          }
        });
    }
    else {
      self.alertError("Campos vacíos", "Debe llenar todos los campos para poder registrarse")
    }
  }


  validarCampos() {
    if (this.name != "" && this.apellidos != "" && this.id != ""
      && this.email != "" && this.email2 != "" && this.genero != "" && this.pass != ""
      && this.celular != "" && this.direccion != "") {
      return true;
    }
    return false;
  }

  async alertError(msg: string, detalle: any) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      subHeader: detalle,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
