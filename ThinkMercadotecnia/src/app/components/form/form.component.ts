import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import Swal from 'sweetalert2';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public usuario: Usuarios[];
  public user;


  constructor(
    public _ubicacion: UbicacionService
  ) {
    this.usuario = []
    this.user = { name: '' }

  }
  public estudios_select: any;
  public select_municipios: any;
  //---------init----------- 
  ngOnInit(): void {

    // deshabilito selects opcionales
    this.estudios_select = document.getElementById('estudios_uni')
    this.estudios_select.setAttribute("disabled", "true")
    this.getUsuarios()
    this.select_municipios = document.getElementById('select-municipios');
    this.select_municipios.setAttribute("disabled", "true")

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
  //------------select-direccion---------------------
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
  console.log(this.estados)
  console.log(this.municipios_list)
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
    "soltero(a)",
    "casado(a)",
    "viudo(a)",
    "divorciado(a)",
    "union libre",
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
    Swal.fire({
      title: 'Listo!',
      text: 'tu formulario a sido enviado, gracias por registrarte :D',
      icon: 'success',
      confirmButtonText: 'Cool!',
      timer: 2500,
    });

    setTimeout(() => {
      this.formulario = form.value;
      //   this.addUsuario()
      //   location.reload()
    }, 3000)

  }

  getUsuarios() {
    if (localStorage.getItem("usuarios") === null) {
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


  public getMunicipios(estado:any){
    this.municipios = this._ubicacion.getMunicipios()
    return this.municipios[estado]
  }

}

// ng deploy --base-href=https://LanzerDev.github.io/think-mercadotecnia/   