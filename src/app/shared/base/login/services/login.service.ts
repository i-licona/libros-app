import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { UnsetAuthors } from 'src/app/modules/authors/store/actions/authors.actions';
import { PostLoginModel, PostResponseLoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi:string = 'https://localhost:7163/api/cuentas';
  private token:string;
  constructor(
    private http:HttpClient,
    private store:Store<AppState>
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

  getToken():string{
    this.token = localStorage.getItem('token');
    return this.token;
  }

  logOut(){

  }



}
