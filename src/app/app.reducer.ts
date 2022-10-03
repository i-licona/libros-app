import { ActionReducerMap } from '@ngrx/store';
import * as reducer  from './modules/authors/store/reducer/authors.reducer';

export interface AppState {
  authors: reducer.AuthorsState;
}

export const appReducers:ActionReducerMap<AppState> = {
  authors: reducer.authorsReducer
}
