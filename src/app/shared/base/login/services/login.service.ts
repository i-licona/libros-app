import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostLoginModel, PostResponseLoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi:string = 'https://localhost:7163/api/cuentas';
  public token:string;
  constructor(
    private http:HttpClient
  ) { }

  login(data:PostLoginModel):Observable<PostResponseLoginModel>{
    return this.http.post<PostResponseLoginModel>(`${this.urlApi}/login`, data);
  }

  isLogged():boolean{
    this.token = localStorage.getItem('token');
    if (this.token) {
      return true;
    }else{
      return false;
    }
  }

}
