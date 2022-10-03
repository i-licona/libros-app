import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/base/login/services/login.service';
import { GetAuthorModel } from '../models/authors.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private url:string = 'https://localhost:7163/api/Autor'
  constructor(
    private http:HttpClient,
    private loginService:LoginService,
  ) { }

  getAuthors():Observable<GetAuthorModel[]>{
    let token = this.loginService.getToken();
    let headers = new HttpHeaders({'Content-Type':'application/json', authorization: `Bearer ${token}`});
    return this.http.get<GetAuthorModel[]>(`${this.url}/getAuthors`,{headers:headers});
  }
}
