import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
<<<<<<< HEAD
    
=======
>>>>>>> abbd9cce865d4cc4064fc8b83ea0df99640fd7bc
  }

  initializeApp() {
    this.platform.ready().then(() => {
<<<<<<< HEAD
    this.statusBar.styleDefault();
=======
      this.statusBar.styleDefault();
      this.splashScreen.hide();
>>>>>>> abbd9cce865d4cc4064fc8b83ea0df99640fd7bc
    });
  }
}
