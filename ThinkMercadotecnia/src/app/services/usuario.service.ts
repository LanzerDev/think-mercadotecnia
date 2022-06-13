import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public _http: HttpClient,
  ) { }


  public createUser(form:any){
    let headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this._http.post('localhost:3000/api/newUser',form,{headers: headers})
  }
}
