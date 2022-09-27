import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonImportsModule } from '../common-imports/common-imports/common-imports.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
/* dynamic breadcrum */
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';



@NgModule({
  declarations: [
    NavbarComponent,
    BreadcrumComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommonImportsModule,
    RouterModule,
    NgDynamicBreadcrumbModule,
  ],
  exports:[
    NavbarComponent,
    BreadcrumComponent
  ]
})
export class BaseModule { }
