import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { Component} from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage{

  listTips = []
  imagen:any
  constructor(private App: AppComponent) { 
    
  }

  ionViewDidEnter() {
    this.listTips = []
    if (this.App.id_User != null) {
      this.cargarTips();
    }
  }

  async cargarTips(){
  var self = this;
  await $.getJSON(environment.url + "/api/tips/1/", function (res) {
   self.listTips=res.descripcion.split(';')
   self.imagen=res.imagen;
   console.log(res)
  })
}

  
}
