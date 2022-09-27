import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { ModulesRoutingModule } from './modules-routing.module';



@NgModule({
  declarations: [
    AuthorsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
