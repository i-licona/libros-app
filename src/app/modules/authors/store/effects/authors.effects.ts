import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, of, tap } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthorsService } from "../../services/authors.service";
import * as actions from '../actions/authors.actions';

@Injectable()
export class AuthorsEffects{
  constructor(
    private actions$:Actions,
    private service:AuthorsService
  ) {

  }

  getAuthors$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getAuthors),
    tap(data => console.log(data)),
    mergeMap(() => this.service.getAuthors().pipe(
      map(authors => actions.getAuthorsSuccess({ authors: authors })),
      catchError( (error) => of(actions.getAuthorsError({ error: error })))
    ))
  ))
}
