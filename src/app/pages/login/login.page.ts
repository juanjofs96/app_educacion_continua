import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  constructor(
    private router: Router,
    private platform: Platform,
    private google: GooglePlus,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private fb: Facebook
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
    console.log(user);
    this.router.navigate(["/educ/home/"]);
  }

  async loginFacebookAndroid() {

    const res: FacebookLoginResponse = await this.fb.login(['public_profile', 'email']);
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    const resConfirmed = await this.fireAuth.auth.signInWithCredential(facebookCredential);
    const user = resConfirmed.user;
    this.router.navigate(["/educ/home/"]);

  }

  async loginFacebookWeb() {
    const res = await this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    const user = res.user;
    console.log(user);
    this.router.navigate(["/educ/home/"]);

  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
        .credential(accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigate(["/educ/home/"]);
        this.loading.dismiss();
      })

  }
  onLoginError(err) {
    console.log(err);
  }
}

