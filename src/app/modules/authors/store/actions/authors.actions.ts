import { createAction, props } from '@ngrx/store';
import { GetAuthorModel } from '../../models/authors.model';

export const getAuthors = createAction('[Authors Component] Get Authors');

export const getAuthorsSuccess = createAction(
  '[Authors Component] Get Authors Success',
  props<{ authors:GetAuthorModel[] }>()
);

export const getAuthorsError = createAction(
  '[Authors Component] Get Authors Error',
  props<{ error:any }>()
);

export const UnsetAuthors = createAction(
  '[Authors Component] Unset Authors'
);
