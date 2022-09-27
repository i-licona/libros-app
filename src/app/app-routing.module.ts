import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuardGuard } from './guards/session-guard.guard';
import { LoginComponent } from './shared/base/login/login.component';
import { RegisterComponent } from './shared/base/register/register.component';

const routes: Routes = [
  {
    path:'home',
    /* canLoad:[AuthGuard], */
    /* load module with lazy load */
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
    canLoad:[SessionGuardGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    redirectTo:'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
