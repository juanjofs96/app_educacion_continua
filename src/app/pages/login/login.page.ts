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
  constructor(
    private router: Router,
    private platform: Platform,
    private google: GooglePlus,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private fb: Facebook,
    private App: AppComponent,
  ) {

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
    console.log(this.email + "_" + this.pass)
    var self = this;
    await $.getJSON("https://prueba-63695.firebaseio.com/usuarios.json", function (data_users) {
      for (let i = 0; i < data_users.length; i++) {
        if (data_users[i].email == self.email && data_users[i].pass == self.pass) {
          self.App.id_User = data_users[i].id_user;
          self.habilitarOpciones();
        }
      }
    });
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
    const user = res.user;
    this.habilitarOpciones();
  }

  async loginFacebookAndroid() {
    const res: FacebookLoginResponse = await this.fb.login(['public_profile', 'email']);
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    const resConfirmed = await this.fireAuth.auth.signInWithCredential(facebookCredential);
    const user = resConfirmed.user;
    this.habilitarOpciones();
  }

  async loginFacebookWeb() {
    const res = await this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    const user = res.user;
    this.habilitarOpciones();
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
        .credential(accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.habilitarOpciones();
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

}

