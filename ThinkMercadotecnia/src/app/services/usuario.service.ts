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
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.post('http://103.23.60.169:3000/api/newuser',form,{headers: headers})
  }
}
