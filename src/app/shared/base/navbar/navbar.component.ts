import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { UnsetAuthors } from 'src/app/modules/authors/store/actions/authors.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.store.dispatch(UnsetAuthors());
    localStorage.removeItem('token');
    localStorage.removeItem('expiracion');
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
  }

}
