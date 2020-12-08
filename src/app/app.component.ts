import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, AlertController, Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

@Injectable()
export class AppComponent {
  public listMenu = [{ item: "Curso Aprobados", disable: true }, { item: "Descargar Diplomas", disable: true }, { item: "Sugerencias y Reclamos", disable: true },
  { item: "Contáctanos", disable: false }, { item: "Perfil", disable: true }];
  public listTabs = [{ item: "Home", disable: false, tab: "home", icon: "home" }, { item: "Mis Cursos", disable: true, tab: "cursos", icon: "school" },
  { item: "Notificaciones", disable: true, tab: "notificaciones", icon: "notifications" },
  { item: "Encuestas", disable: true, tab: "encuestas", icon: "bar-chart" }];
  public estadoUser: boolean;
  public id_User: string;
  private permitido: boolean;
  public storage:Storage;
  constructor(
    private alertController: AlertController,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private s:Storage
  ) {
    this.storage=s;
    this.permitido = true;
    this.initializeApp();
  }

  initializeApp() {
    this.estadoUser = false;
    this.verificarLogin();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  verificar(index: number) {
    if (this.listMenu[index].disable) {
      this.alertLogin();
      this.permitido = false;
      this.menu.close();
    }
    else {
      this.permitido = true;
    }

    if (index == 3 && this.permitido) {
      this.router.navigate(["educ/contacto/"]);
      this.menu.close();

    }
    if (index == 2 && this.permitido) {
      this.router.navigate(["educ/sugerencias/"]);
      this.menu.close();
    }
  }

    verificarLogin() {
    this.storage.get("id").then((value) => {
      if (value != null) {
        this.id_User = value;
        console.log("HABILITADO");
        this.habilitarOpciones();

      }
    })
  }

  async alertLogin() {
    const alert = await this.alertController.create({
      header: 'Para continuar regístrese o inicie sesión',
      message: '¿Desea registrarse o iniciar sesión?',
      backdropDismiss: false,
      buttons: [{
        text: 'NO', handler: () => {
          this.router.navigate(["/educ/home/"]);
        }
      }, {
        text: 'SI', handler: () => {
          this.router.navigate(["/login"]);
        }
      }]
    });
    await alert.present();
  }

  salir() {
    this.storage.set("id",null);
    this.router.navigate(["/login"]);
    this.estadoUser = false;
    this.id_User = null;
    this.menu.close();
    for (let i = 0; i < this.listMenu.length; i++) {
      i == 3 ? this.listMenu[i].disable = false : this.listMenu[i].disable = true;
    }

    for (let i = 0; i < this.listTabs.length; i++) {
      i == 0 ? this.listTabs[i].disable = false : this.listTabs[i].disable = true;
    }

  }

  
  habilitarOpciones() {
    this.estadoUser = true;
    for (let i = 0; i < this.listMenu.length; i++) {
      this.listMenu[i].disable = false;
    }

    for (let i = 0; i < this.listTabs.length; i++) {
      this.listTabs[i].disable = false;
    }
    this.router.navigate(["/educ/home/"]);
  }

}
