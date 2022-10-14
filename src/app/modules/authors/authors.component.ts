import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { GetAuthorModel } from './models/authors.model';
import { getAuthors } from './store/actions/authors.actions';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  public authors:GetAuthorModel[];
  private authorsSubs:Subscription;
  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('authors').pipe(filter(({authors}) => authors.length != 0 )).subscribe({
      next: ({authors}) => {
        this.authors = authors;
      },
      error: error => console.log(error)
    });
    this.store.dispatch(getAuthors());
  }

  /* ngOnDestroy(): void {
    this.authorsSubs.unsubscribe();
  } */

}
