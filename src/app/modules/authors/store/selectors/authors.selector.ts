import { createSelector } from '@ngrx/store';
import { AuthorsState } from '../reducer/authors.reducer';

export interface AppState {
  feature: AuthorsState;
}

export const selectFeature = (state: AppState) => state.feature;

export const selectAuthors = createSelector(
  selectFeature,
  (state: AuthorsState) => state.authors
);
