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
   public estudios_select:any;
   public numero_hijos:any;

  //---------init----------- 
  ngOnInit(): void {

    // deshabilito selects opcionales
    this.numero_hijos = document.getElementById('numero_hijos');
    this.numero_hijos.setAttribute("disabled", "true")

    this.estudios_select = document.getElementById('estudios_uni')
    this.estudios_select.setAttribute("disabled", "true")
    this.getUsuarios()
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



  //-----------select-generos--------------

  public default_option = ''
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
  
  //------------select-estudios-universitarios-carreras---------------

  public carreras_list = [
    "Administracion de empresas",
    "Contabilidad",
    "Finanzas",
    "Mercadotecnia",
    "Comercio",
    "Ciencias Politicas",
    "Economia",
    "Psicologia",
    "Sociologia y antropologia",
    "Comunicacion",
    "Criminologia",
    "Derecho",
    "Arquitectura",
    "Ingenieria civil",
    "Electricidad",
    "Electronica y automaticacion",
    "Ingenieria de vehiculos de motor",
    "Ingenieria industrial",
    "Ingenieria en metalurgia",
    "Ingenieria quimica",
    "Ingenieria ambiental",
    "Tecnologias de la informacion y la comunicacion",
    "Mineria y extraccion",
    "Gastronomia",
    "Ciencias de la computacion",
    "Ingenieria de software",
    "Ingenieria en sistemas",
    "Matematicas y estadistica",
    "Quimico farmacobiologo",
    "Diseño grafico",
    "Formacion docente",
    "Musica y artes escenicas",
    "Audiovisuales y produccion",
    "Filosofia y letras",
    "Historia y arqueologia",
    "Relaciones internacionales y politicas extranjeras",
    "Odontologia",
    "Medicina",
    "Enfermeria",
    "Terapia y rehabilitacion",
    "Veterinaria",
    "Produccion y explotacion agricola y ganadera",
  ]

  public carreras = '';
  public default_carrera:any;
  public carrera_select:any;
  dataChangedCarrera(newObj:any) {
    console.log(this.carreras)
    if(document.getElementById('default-option-carrera')){
      this.default_carrera = document.getElementById('default-option-carrera')
      this.default_carrera.remove()
    }
  }

  // --------select-ocupacion-----------
  public ocupaciones_list = [
      "Desempleado(a)",
      "Ama de casa",
      "Estudiante",
      "Empleado de tiempo completo en sector privado",
      "Empleado de medio tiempo en el sector privado",
      "Trabajador por cuenta propia en el sector privado",
      "Empleado de tiempo completo en sector publico",
      "Empleado de medio tiempo en el sector publico",
      "Trabajador por cuenta propia en el sector publico",
      "Retirado",
      "Medios de comunicación",
      "Publicidad",
      "Mercadotecnia",
      "Ventas",
      "Áreas de medicina",
      "Otro",
  ]

  public ocupaciones = '';
  public default_ocupacion:any;
  public ocupacion_select:any;
  dataChangedOcupacion(newObj:any) {
    if(document.getElementById('default-option-ocupacion')){
      this.default_ocupacion = document.getElementById('default-option-ocupacion')
      this.default_ocupacion.remove()
    }
  }

  //--------------select-ingresos--------------
  public ingresos_list = [
    "menos de 20k",
    "21k a 30k",
    "31k a 40k",
    "41K a 50k",
    "51k a 60k",
    "61k a 70k",
    "71k a 80k",
    "mas de 80k"
  ]

  public ingresos = '';
  public default_ingresos:any;
  public ingresos_select:any;
  dataChangedIngresos(newObj:any) {
    if(document.getElementById('default-option-ingresos')){
      this.default_ingresos = document.getElementById('default-option-ingresos')
      this.default_ingresos.remove()
    }
  }
  //--------------select-estado-civil---------
  public estado_civil_list = [
    "soltero(a)",
    "casado(a)",
    "viudo(a)",
    "divorciado(a)",
    "union libre",
  ]
  public estado_civil = '';
  public default_estCiv:any;
  public estCiv_select:any;
  dataChangedEstCiv(newObj:any) {
    if(document.getElementById('default-option-estCiv')){
      this.default_estCiv = document.getElementById('default-option-estCiv')
      this.default_estCiv.remove()
    }
  }
  //-------------select-tiene-hijos---------
  public tiene_hijos_list = [
    "Si",
    "No",
  ]
  public tiene_hijos = '';
  public default_tiene_hijos:any;
  public tiene_hijos_select:any;
  dataChangedTieneHijos(newObj:any) {
    if(document.getElementById('default-option-tiene_hijos')){
      this.default_tiene_hijos = document.getElementById('default-option-tiene_hijos')
      this.default_tiene_hijos.remove()
    }

    if(this.tiene_hijos === 'Si'){
      if(this.tiene_hijos === 'Si'){
        if(document.getElementById('estudios_uni')){
          this.numero_hijos = document.getElementById('numero_hijos')
          this.numero_hijos.removeAttribute("disabled")
        }
      } else {
        this.numero_hijos = document.getElementById('numero_hijos')
        this.numero_hijos.setAttribute("disabled", "true")
      }
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
