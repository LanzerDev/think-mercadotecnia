import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public usuario: Usuarios[];

  constructor() {
    this.usuario = []
   }

  ngOnInit(): void {
    this.getUsuarios()
  }
  public formulario:any = {};
  
  saveForm(form:any){
    this.formulario = form.value;
    console.log(this.formulario)
    this.addUsuario()
    location.reload()
  }

  getUsuarios(){
    if(localStorage.getItem("usuarios") === null){
      this.usuario = []
    } else {
      this.usuario = JSON.parse(localStorage.getItem("usuarios")!)
    }
  }

  addUsuario() {
    this.usuario.push(this.formulario)
    localStorage.setItem("usuarios", JSON.stringify(this.usuario))
    console.log(this.usuario)
    this.getUsuarios()
  }


}
