import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController,AlertController,Platform} from '@ionic/angular';
import { Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

@Injectable()
export class AppComponent {
  public listMenu = [{ item: "Curso Aprobados", disable: true }, {item:"Descargar Diplomas",disable:true},{item: "Sugerencias y Reclamos",disable:true},
  {item:"Contáctanos",disable:false} ,{item:"Perfil",disable:true}];
  public listTabs = [{ item: "Home", disable: false, tab: "home", icon: "home" }, { item: "Mis Cursos", disable: true, tab: "cursos", icon: "school" },
  { item: "Notificaciones", disable: true, tab: "notificaciones", icon: "notifications" },
  { item: "Encuestas", disable: true, tab: "encuestas", icon: "bar-chart" }];

constructor(
  private alertController: AlertController,
  private router: Router,
  private platform: Platform,
  private splashScreen: SplashScreen,
  private statusBar: StatusBar,
  private menu: MenuController,
) {
  this.initializeApp();
}

initializeApp() {
  this.platform.ready().then(() => {
  this.statusBar.styleDefault();
  });
}

verificar(index:number){
  if(this.listMenu[index].disable) this.alertLogin();
  if(index==3){
    this.router.navigate(["educ/contacto/"]);
  }
}

async alertLogin() {
  const alert = await this.alertController.create({
    header: 'Registrese o inicie sesión',
    message: 'Desea registrarse o iniciar sesión',
    buttons: ['NO', {text:'SI',handler:()=>{
      this.router.navigate(["/login"]);
    }}]
  });
  await alert.present();
}

salir(){
  this.platform.backButton.subscribe(()=>{
    navigator['app'].exitApp();
    });
}

}
