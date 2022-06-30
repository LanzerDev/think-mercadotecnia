import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public _http: HttpClient,
  ) { }
  public url:string = "https://formularioapi.shop"
 // public url:string = "http://localhost:3000"

  public createUser(form:any){
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.post(this.url + '/api/newuser',form,{headers: headers})
  }
}
