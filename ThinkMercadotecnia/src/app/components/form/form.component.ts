import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import Swal from 'sweetalert2';

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

    Swal.fire({
      title: 'Listo!',
      text: 'tu formulario a sido enviado, gracias por registrarte :D',
      icon: 'success',
      confirmButtonText: 'Cool!',
      timer: 2500,
    });

    setTimeout(()=>{
      this.formulario = form.value;
      console.log(this.formulario)
      this.addUsuario()
      location.reload()
    },3000)

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
