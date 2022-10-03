import { createReducer, on } from '@ngrx/store';
import { GetAuthorModel } from '../../models/authors.model';
import * as actions from '../actions/authors.actions';
import { AppState } from '../../../../app.reducer';
export interface AuthorsState {
  authors:GetAuthorModel[];
  error:any;
  loadding:boolean;
}

/* export interface AuthorsAppState extends AppState{
  authors: AuthorsState
} */

export const initialState: AuthorsState = {
  authors: [],
  error:null,
  loadding:false,
}

const _authorsReducer = createReducer(initialState,

  on(actions.getAuthors, state => ({ ...state, loadding:true })),
  on(actions.getAuthorsSuccess, ( state, { authors} ) => ({
    ...state,
    loadding: false,
    authors: [ ...authors ]
  })),
  on(actions.getAuthorsError, (state, {error}) => ({
    ...state,
    authors: [],
    error:error
  }))

);

export function authorsReducer(state, action) {
  return _authorsReducer(state, action);
}
