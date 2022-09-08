import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import Swal from 'sweetalert2';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { from } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public usuario: Usuarios[];
  public user;


  constructor(
    public _ubicacion: UbicacionService,
    public _usuariosService: UsuarioService

  ) {
    this.usuario = []
    this.user = { name: '' }
  }
  public estudios_select: any;
  public select_municipios: any;
  public hijos_menores: any;
  public edad_input:any;
  //---------init----------- 
  ngOnInit(): void {

    // deshabilito selects opcionales
    this.estudios_select = document.getElementById('estudios_uni')
    this.estudios_select.setAttribute("disabled", "true")
    this.select_municipios = document.getElementById('select-municipios');
    this.select_municipios.setAttribute("disabled", "true")
    this.hijos_menores = document.getElementById('hijos_menores');
    this.hijos_menores.setAttribute("disabled", "true");
    this.edad_input = document.getElementById('edad_input');
  
    }


  //select fecha nacimiento
  public edad:any;
  public dateChange(e:any){
    this.edad = moment().diff(e.target.value, 'years')
    this.edad_input.value = this.edad
  }

  //-----------select-nivel-estudios-------
  public estudios_list = [
    "No estudió",
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
  public default_lvl_est: any;

  dataChangedNivelEstudios(newObj: any) {
    if (document.getElementById('default-option-lvl-est')) {
      this.default_lvl_est = document.getElementById('default-option-lvl-est')
      this.default_lvl_est.remove()
    }
    if (this.estudios === 'Estudios universitarios completos' || this.estudios === 'Posgrado' || this.estudios === 'Diplomado' || this.estudios === 'Doctorado') {
      if (document.getElementById('estudios_uni')) {
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
  public default: any;
  dataChanged(newObj: any) {
    if (document.getElementById('default-option')) {
      this.default = document.getElementById('default-option')
      this.default.remove()
    }
  }
  //------------select-Estados---------------------
  public estados_list = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de Mexico",
    "Coahuila",
    "Colima",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Estado de Mexico",
    "Michoacan",
    "Morelos",
    "Nayarit",
    "Nuevo Leon",
    "Oaxaca",
    "Puebla",
    "Queretaro",
    "Quintana Roo",
    "San Luis Potosi",
    "Sinaloa",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatan",
    "Zacatecas",
  ]

  public estados = '';
  public default_estados: any;
  public estados_select: any;
 public dataChangedEstados(newObj: any) {
  this.municipios_list = this.getMunicipios(this.estados)
    if (document.getElementById('default-option-estados')) {
      this.default_estados = document.getElementById('default-option-estados')
      this.default_estados.remove()
    }
    this.select_municipios.removeAttribute("disabled")
  }

  //-------------select-municipios------------------
  public municipios:any = '';
  public municipios_list:any;
  public default_municipios: any;
  public municipios_select: any;
  dataChangedMunicipios(newObj: any) {
    if (document.getElementById('default-option-municipios')) {
      this.default_municipios = document.getElementById('default-option-municipios')
      this.default_municipios.remove()
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
    "Ingeniería de vehiculos de motor",
    "Ingeniería industrial",
    "Ingeniería en metalurgia",
    "Ingeniería quimica",
    "Ingeniería ambiental",
    "Tecnologias de la informacion y la comunicacion",
    "Mineria y extraccion",
    "Gastronomia",
    "Ciencias de la computación",
    "Ingeniería de software",
    "Ingeniería en sistemas",
    "Matematicas y estadistica",
    "Quimico farmacobiologo",
    "Diseño gráfico",
    "Formacion docente",
    "Musica y artes escenicas",
    "Audiovisuales y produccion",
    "Filosofia y letras",
    "Historia y arqueologia",
    "Relaciones internacionales y politícas extranjeras",
    "Estudios internacionales y politícas publicas",
    "Odontología",
    "Medicina",
    "Enfermeria",
    "Terapia y rehabilitacion",
    "Veterinaria",
    "Produccion y explotacion agricola y ganadera",
  ]

  public carreras = '';
  public default_carrera: any;
  public carrera_select: any;
  dataChangedCarrera(newObj: any) {
    if (document.getElementById('default-option-carrera')) {
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
  public default_ocupacion: any;
  public ocupacion_select: any;
  dataChangedOcupacion(newObj: any) {
    if (document.getElementById('default-option-ocupacion')) {
      this.default_ocupacion = document.getElementById('default-option-ocupacion')
      this.default_ocupacion.remove()
    }
  }

  //--------------select-ingresos--------------
  public ingresos_list = [
    "Menos de $5mil MXN",
    "$5mil MXN",
    "$10mil MXN",
    "$15mil MXN",
    "$20mil MXN",
    "$25mil MXN",
    "$30mil MXN",
    "$35mil MXN",
    "$40mil MXN",
    "$45mil MXN",
    "$50mil MXN",
    "$55mil MXN",
    "$60mil MXN",
    "$65mil MXN",
    "$70mil MXN",
    "$75mil MXN",
    "$80mil MXN",
    "Más de 80mil MXN"
  ]

  public ingresos = '';
  public default_ingresos: any;
  public ingresos_select: any;
  dataChangedIngresos(newObj: any) {
    if (document.getElementById('default-option-ingresos')) {
      this.default_ingresos = document.getElementById('default-option-ingresos')
      this.default_ingresos.remove()
    }
  }
  //--------------select-estado-civil---------
  public estado_civil_list = [
    "Soltero(a)",
    "Casado(a)",
    "Viudo(a)",
    "Divorciado(a)",
    "Unión libre",
  ]
  public estado_civil = '';
  public default_estCiv: any;
  public estCiv_select: any;
  dataChangedEstCiv(newObj: any) {
    if (document.getElementById('default-option-estCiv')) {
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
  public default_tiene_hijos: any;
  public tiene_hijos_select: any;
  dataChangedTieneHijos(newObj: any) {
    if (document.getElementById('default-option-tiene_hijos')) {
      this.default_tiene_hijos = document.getElementById('default-option-tiene_hijos')
      this.default_tiene_hijos.remove()
    }
    if(this.tiene_hijos == 'Si'){
      this.hijos_menores.removeAttribute("disabled")
    } else {
      this.hijos_menores.setAttribute("disabled", "true");
    }
  }

    //-------------select-tiene-menores de 18---------
    public tiene_hijos_menores18_list = [
      "Si",
      "No",
    ]
    public tiene_hijos_menores18 = '';
    public default_tiene_hijos_menores18: any;
    public tiene_hijos_menores18_select: any;
    dataChangedTieneHijosMenores18(newObj: any) {
      if (document.getElementById('default-option-tiene_hijos_menores18')) {
        this.default_tiene_hijos_menores18 = document.getElementById('default-option-tiene_hijos_menores18')
        this.default_tiene_hijos_menores18.remove()
      }
    }

  //----------select-tiene-internet--------
  public tiene_internet_list = [
    "Si",
    "No",
  ]
  public tiene_internet = '';
  public default_tiene_internet: any;
  public tiene_internet_select: any;
  dataChangedTieneInternet(newObj: any) {
    if (document.getElementById('default-option-tiene_internet')) {
      this.default_tiene_internet = document.getElementById('default-option-tiene_internet')
      this.default_tiene_internet.remove()
    }
  }




  public formulario: any = {};
  saveForm(form: any) {

    console.log(form.value)
    // if (form.value.Telefono == ''){
    //       Swal.fire({
    //         title: 'Ups!',
    //         text: 'Falta ingresar el telefono',
    //         icon: 'error',
    //         confirmButtonText: 'ok',
    //         timer: 2000,
    //       });
    //     } else if (typeof form.value.Municipio === 'object'){
    //   Swal.fire({
    //     title: 'Ups!',
    //     text: 'Si ingresas un estado tienes que seleccionar tu municipio',
    //     icon: 'error',
    //     confirmButtonText: 'ok',
    //     timer: 3000,
    //   });
    // } else {
    //   this._usuariosService.createUser(form.value).subscribe((res:any)=>{
    //     if(res.estatus == "0"){
    //       Swal.fire({
    //         title: 'Ups!',
    //         text: 'Este correo ya a sido registrado',
    //         icon: 'error',
    //         confirmButtonText: 'ok',
    //         timer: 2000,
    //       });
    //     }
    //     if(res.estatus == "1"){
    //       Swal.fire({
    //         title: 'Ups!',
    //         text: 'Este numero ya a sido registrado',
    //         icon: 'error',
    //         confirmButtonText: 'ok',
    //         timer: 2000,
    //       });
    //     }
    //     if(res.estatus == "2"){
    //       Swal.fire({
    //         title: 'Listo!',
    //         text: 'Gracias por registrarte!',
    //         icon: 'success',
    //         confirmButtonText: 'ok',
    //         timer: 2000,
    //       });
    //       setTimeout(()=>{
    //         location.reload()
    //       },2100)
    //     }
    //   })
    // }
  }

  public getMunicipios(estado:any){
    this.municipios = this._ubicacion.getMunicipios()
    return this.municipios[estado]
  }

  public emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  public emailIsValid:any = true;
  public verifyEmail(e:any){
    if(e.target.value.match(this.emailRegex)){
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }
  }

}

// ng deploy --base-href=https://LanzerDev.github.io/think-mercadotecnia/   