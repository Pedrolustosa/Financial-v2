import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(dm => dm.DashboardModule),
  },
  {
    path: 'system', loadChildren: () => import('./pages/system/system.module').then(sm => sm.SystemModule),
  },
  {
    path: 'category', loadChildren: () => import('./pages/category/category.module').then(cm => cm.CategoryModule),
  },
  {
    path: 'expenditure', loadChildren: () => import('./pages/expenditure/expenditure.module').then(em => em.ExpenditureModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
