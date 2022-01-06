import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
