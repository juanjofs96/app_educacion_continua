import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AppComponent } from "../../app.component";
import * as $ from "jquery";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loading: any;
  public id_user: string;
  private email: string = "";
  private pass: string = "";
  private noExiste: boolean;
  constructor(
    private router: Router,
    private platform: Platform,
    private google: GooglePlus,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private fb: Facebook,
    private App: AppComponent,
    private alertController: AlertController
  ) {
    this.noExiste = true;
  }

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }


  async presentLoading(loading) {
    await loading.present();
  }

  async login() {
    var data={
      "correo":this.email,
      "clave":this.pass
    }
    var self = this;
    await $.post("http://localhost:8000/api/login_participante/",data).done(function (user) {
          if(!user.error){
            self.App.id_User = user.id;
            self.habilitarOpciones();
          }          
         else{
          self.alertError(user.mensaje);
         }
    });
  }

  async verificarCuenta(user:any) {
    var self = this;
    await $.post("http://localhost:8000/api/existe_participante/",user).done( function (user) {
          if(!user.error){
            self.App.id_User = user.id;
            self.habilitarOpciones();
          }
          else{
            self.alertError("No se encuentra registrado");
          }
  })
}

  async loginGoogle() {
    let params;
    if (this.platform.is('android')) {
      params = {
        'webClientId': '44397923925-udqfaidjvqhp8p7ule0oihpn4i3co6je.apps.googleusercontent.com',
        'offline': true
      }
      this.google.login(params)
        .then((response) => {
          const { idToken, accessToken } = response
          this.onLoginSuccess(idToken, accessToken);
        }).catch((error) => {
          console.log(error)
          alert('error:' + JSON.stringify(error))
        });
    }
    else {
      this.loginGoogleWeb();
    }
  }


  loginFacebook() {
    if (this.platform.is('android')) {
      this.loginFacebookAndroid();
    } else {
      this.loginFacebookWeb();
    }
  }

  async loginGoogleWeb() {
    const res = await this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const email = res.user.email;
    this.verificarCuenta(email);
  }

  async loginFacebookAndroid() {
    const res: FacebookLoginResponse = await this.fb.login(['public_profile', 'email']);
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    const resConfirmed = await this.fireAuth.auth.signInWithCredential(facebookCredential);
    const email = resConfirmed.user.email;
    this.verificarCuenta(email);
  }

  async loginFacebookWeb() {
    const res = await this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    const email = res.user.email;
    this.verificarCuenta(email);
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
        .credential(accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        const email = response.user.email;
        this.verificarCuenta(email);
        this.loading.dismiss();
      })
  }
  onLoginError(err) {
    console.log(err);
  }


  habilitarOpciones() {
    this.App.estadoUser = true;
    for (let i = 0; i < this.App.listMenu.length; i++) {
      this.App.listMenu[i].disable = false;
    }

    for (let i = 0; i < this.App.listTabs.length; i++) {
      this.App.listTabs[i].disable = false;
    }
    this.router.navigate(["/educ/home/"]);
  }

  async alertError(msg:string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      subHeader: 'Credenciales incorrectas',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}

