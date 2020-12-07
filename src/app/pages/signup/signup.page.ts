import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private name: string = "";
  private pass: string = "";
  private pass2: string = "";
  private apellidos: string = "";
  private email: string = "";
  private celular: string = "";
  private email2: string = "";
  private direccion: string = "";
  private id: string = "";
  private genero: string = "";
  private data: any;
  private data_aux: any;
  private verificado: boolean;
  constructor(private alertController: AlertController, private router: ActivatedRoute, private route: Router) {
    this.router.queryParams.subscribe(params => {
      this.data_aux = JSON.parse(params.user);
      this.name = this.data_aux.nombres;
      this.email = this.data_aux.correo;
      this.apellidos = this.data_aux.apellidos;
    })
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
    var validado = this.validarCampos();
    if (validado && this.verificado) {
      $.post(environment.url+"/api/participante/", this.data)
        .done(function (data) {
          self.alertError("Registro exitoso", "Su cuenta se ha creado exitosamente");
          self.route.navigate(["/educ/home/"]);

        }).fail(function (error) {
          let x = error.responseJSON;
          let isError = false;
          try {
            x["correo"][0] != null || x["correo_alternativo"][0] != null ? self.alertError("Error al registrarse", "Introduzca una dirección de correo electrónico válida.") : isError = true;
            x["identificacion"][0] != null ? self.alertError("Error al registrarse", x["identificacion"][0]) : isError = true;
            !isError ? self.alertError("Error al registrarse", "El registro no fue exitoso") : null;
          } catch (ex) {
            if (isError) {
              self.alertError("Error al registrarse", "El registro no fue exitoso");
            }
          }
        });
    }
    if (!validado)
      self.alertError("Campos vacíos", "Debe llenar todos los campos para poder registrarse")

  }

  validarCampos() {
    if (this.name != "" && this.apellidos != "" && this.id != ""
      && this.email != "" && this.genero != "" && this.pass != "" && this.pass2 != ""
      && this.celular != "" && this.direccion != "") {
      if (this.pass != this.pass2) {
        this.alertError("Verifique su clave", "Las contraseñas no coinciden");
        this.verificado = false;
      }
      else {
        this.verificado = true;
      }
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
