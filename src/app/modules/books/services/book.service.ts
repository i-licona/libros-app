import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBooksResponse } from '../models/books.models';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url:string = 'https://localhost:7163/api/libro';
  constructor(
    private http:HttpClient
  ) { }

  getBooks(token:string):Observable<GetBooksResponse[]>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', authorization: `Bearer ${token}` });
    return this.http.get<GetBooksResponse[]>(`${this.url}/getBooks`, {headers});
  }
}
