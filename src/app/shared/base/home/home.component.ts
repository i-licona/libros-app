import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public rigth:boolean = true;
  constructor(
    private ngDynamicBreadcrumbService:NgDynamicBreadcrumbService
  ) { }

  ngOnInit(): void {
    const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
    this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

  updateBreadcrumb(): void {
    const breadcrumbs  =  [
      {
        label: 'Inicio',
        url: '/home'
      },
      {
        label: 'Autores',
        url: '/home/authors'
      },
      {
        label: 'Libros',
        url: '/home/books'
      },
    ];
    this.ngDynamicBreadcrumbService.updateBreadcrumb(breadcrumbs);
  }
}
