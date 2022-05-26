import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-pagina-admin',
  templateUrl: './pagina-admin.component.html',
  styleUrls: ['./pagina-admin.component.css']
})
export class PaginaAdminComponent implements OnInit {

  constructor() { }

  public usuarios:Array<any> = []

  ngOnInit(): void {
    this.getUsuarios()
    console.log(this.usuarios)
  }


  getUsuarios(){
    if(localStorage.getItem("usuarios") === null){
      this.usuarios = []
    } else {
      this.usuarios = JSON.parse(localStorage.getItem("usuarios")!)
    }
  }

  deleteUsuario(index:any){
    const result = confirm("seguro de querer eliminar a este usuario?");
    if(result == true){
      this.usuarios.splice(index, 1)
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios))
    }
  }
}
