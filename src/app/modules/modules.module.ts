import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { CommonImportsModule } from '../shared/common-imports/common-imports/common-imports.module';



@NgModule({
  declarations: [
    AuthorsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    CommonImportsModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
