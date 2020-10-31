import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { firebaseConfig } from '../environments/environment';
import { Facebook } from '@ionic-native/facebook/ngx';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
>>>>>>> abbd9cce865d4cc4064fc8b83ea0df99640fd7bc

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
>>>>>>> abbd9cce865d4cc4064fc8b83ea0df99640fd7bc
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {}
>>>>>>> abbd9cce865d4cc4064fc8b83ea0df99640fd7bc
