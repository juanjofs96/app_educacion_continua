import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import * as $ from "jquery";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  private mensaje: string;
  private asunto: string;
  private data: FormData;
  private file: any;

  constructor(private App: AppComponent, private alertController: AlertController) {
    this.mensaje = "";
    this.asunto = "";
    $('input[type=file]').val('');
  }

  ngOnInit() {

  }

  enviarSugerencia() {
    this.data = new FormData;
    this.mensaje == "undefined" ? this.mensaje = null : null;
    this.file == null ? null : this.data.append("imagen", this.file);
    this.data.append("asunto", this.asunto);
    this.data.append("id_participante", this.App.id_User);
    this.data.append("mensaje", this.mensaje);
    var self = this;
    $.ajax({
      url: environment.url + "api/sugerencias/",
      data: this.data,
      processData: false,
      contentType: false,
      type: 'POST',
      enctype: 'multipart/form-data',
      success: function (res) {
        self.alertError("Sugerencia enviada", "Gracias, su sugerencia fue recibida");
        self.mensaje = "";
        self.asunto = "";
        $('input[type=file]').val('');
      },
      error: function (error) {
        console.log(error)
        let x = error.responseJSON;
        let isError = false;
        try {
          x["mensaje"][0] != null ? self.alertError("Debe introducir un mensaje", "Campo vacío") : isError = true;
        } catch (ex) {
          console.log(ex)
          if (!isError) {
            self.alertError("No se pudo enviar la sugerencia", "Ocurrió un error");
          }
        }
      }
    });
  }

  uploadImage(input) {
    if (input.target.files && input.target.files[0]) {
      this.file = input.target.files[0]
    }
  }

  async alertError(msg: string, msg2: string) {
    const alert = await this.alertController.create({
      header: msg2,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}

