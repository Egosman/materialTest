import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckloginGuard } from './shared/guards/checklogin.guard';


const routes: Routes = [

  { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'componenteUno', loadChildren: () => import('./pages/componente-uno/componente-uno.module').then(m => m.ComponenteUnoModule) },
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule),
    canActivate: [CheckloginGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
