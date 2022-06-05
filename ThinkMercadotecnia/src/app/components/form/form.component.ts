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
  public user;


  constructor() {
    this.usuario = []
    this.user = {name: ''}
   }

  //---------init----------- 
  ngOnInit(): void {
    this.getUsuarios()
  }



  //-----------select-generos--------------

  public default_option = ' - Seleccionar - '
  public generos_list = [
    'Masculino',
    'Femenino',
    'Prefiero no decirlo'
  ]
  public default:any;
  dataChanged(newObj:any) {
    if(document.getElementById('default-option')){
      this.default = document.getElementById('default-option')
      this.default.remove()
    }
  }
  
  //-----------select-nivel-estudios-------
  public estudios_list = [
    "No estudio",
    "Primaria incompleta",
    "Primaria completa",
    "Secundaria incompleta",
    "Secundaria completa",
    "Preparatoria incompleta",
    "Preparatoria completa",
    "Estudios universitarios incompletos",
    "Estudios universitarios completos",
    "Posgrado",
    "Diplomado",
    "Doctorado",
  ]
  public estudios = '';
  public default_lvl_est:any;
  public estudios_select:any;
  dataChangedNivelEstudios(newObj:any) {
    if(document.getElementById('default-option-lvl-est')){
      this.default_lvl_est = document.getElementById('default-option-lvl-est')
      this.default_lvl_est.remove()
    }
    if(this.estudios === 'Estudios universitarios completos'|| this.estudios === 'Posgrado' || this.estudios === 'Diplomado' || this.estudios === 'Doctorado') {
      if(document.getElementById('estudios_uni')){
        this.estudios_select = document.getElementById('estudios_uni')
        this.estudios_select.removeAttribute("disabled")
      }
    } else {
      this.estudios_select = document.getElementById('estudios_uni')
      this.estudios_select.setAttribute("disabled", "true")
    }
  }
















  public formulario:any = {};
  saveForm(form:any){
    console.log(form)
    console.log(form.value)
    Swal.fire({
      title: 'Listo!',
      text: 'tu formulario a sido enviado, gracias por registrarte :D',
      icon: 'success',
      confirmButtonText: 'Cool!',
      timer: 2500,
    });

    setTimeout(()=>{
      this.formulario = form.value;
   //   this.addUsuario()
   //   location.reload()
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
