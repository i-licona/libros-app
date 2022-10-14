import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/base/login/services/login.service';
import { GetBooksResponse } from './models/books.models';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books:GetBooksResponse[];
  private token:string;
  constructor(
    private loginService:LoginService,
    private bookServie:BookService
  ) { }

  ngOnInit(): void {
    this.token = this.loginService.getToken();
    this.bookServie.getBooks(this.token).subscribe({
      next: (resp) => {
        console.log(resp);
        this.books = resp;
      },
      error: (error) =>{
        console.log(error);
      }
    });
  }

}
