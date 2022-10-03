import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { CommonImportsModule } from '../shared/common-imports/common-imports/common-imports.module';
import { StoreModule } from '@ngrx/store';
import { authorsReducer } from './authors/store/reducer/authors.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthorsEffects } from './authors/store/effects/authors.effects';




@NgModule({
  declarations: [
    AuthorsComponent,
    BooksComponent,
  ],
  imports: [
    CommonModule,
    CommonImportsModule,
    ModulesRoutingModule,
    /* StoreModule.forFeature('authorsState', authorsReducer), */
    EffectsModule.forFeature([AuthorsEffects])
  ]
})
export class ModulesModule { }
