import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/base/home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';

const routes:Routes = [
  {
    path: '',
    component:HomeComponent,
    data: {
      title: 'Home',
      breadcrumb: [
        {
          label: 'Home',
          url: ''
        },
      ]
    },
    children:[
      {
        path:'authors',
        component:AuthorsComponent,
        data: {
          title: 'Autores',
          breadcrumb: [
            {
              label: 'Home',
              url: '/home'
            },
            {
              label: 'Autores', // If "dynamicText" is not parameter , should be set value  using NgMatBreadcrumbService, More info please check the 5th point.
              url: ''
            },
          ]
        },
      },
      {
        path:'books',
        component:BooksComponent,
        data: {
          title: 'Libros',
          breadcrumb: [
            {
              label: 'Home',
              url: '/home'
            },
            {
              label: 'Libros', // If "dynamicText" is not parameter , should be set value  using NgMatBreadcrumbService, More info please check the 5th point.
              url: ''
            },
          ]
        },
      },
    ]
    //canActivate:[AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule
  ]
})
export class ModulesRoutingModule { }
