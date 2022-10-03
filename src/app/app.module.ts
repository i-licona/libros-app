/* angular modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* common imports */
import { CommonImportsModule } from './shared/common-imports/common-imports/common-imports.module';
/* created modules */
import { BaseModule } from './shared/base/base.module';
import { ModulesModule } from './modules/modules.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthorsEffects } from './modules/authors/store/effects/authors.effects';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonImportsModule,
    BaseModule,
    ModulesModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthorsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
