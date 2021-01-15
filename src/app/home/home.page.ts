import { Component } from '@angular/core';
import * as $ from "jquery";
import { environment } from '../../environments/environment';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  listAreas=[];
  listSlides=[];
  constructor(
  ) {
    
  }
 
  ionViewDidEnter() {
    this.listAreas = []
    this.listSlides=[];
    this.getAreas();
  }

  async getAreas(){
    var self=this;
  await $.get(environment.url + "/api/areas/").done(function (areas) {
    if (!areas.error) {
      self.listAreas = areas.areas
      for (let i = 0; i < self.listAreas.length; i++) {
        self.listAreas[i].imagen = environment.url + self.listAreas[i].imagen
      }
    }

  })
}

cursos(id){

}
}