import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private name:string="";
  private pass:string="";
  private user:string="";
  private email:string="";
  private celular:number;
  private data:any;
  constructor() {

   }

  ngOnInit() {
    
  }


  registrar(){
    this.data={
      nombres:this.name,
      pass:this.pass,
      user:this.user,
      email:this.email,
      celular:this.celular,
      id_user:Date.now()
    }

    var self=this;
    
    $.getJSON( "https://prueba-63695.firebaseio.com/usuarios.json", function(data) {
      var x=data.length;
      $.ajax({
        url : 'https://prueba-63695.firebaseio.com/usuarios/'+x+'.json',
        data : JSON.stringify(self.data),
        type : 'PATCH',
        contentType : 'application/json',
        processData: false,
        dataType: 'json'
      });
    })
  }
}
