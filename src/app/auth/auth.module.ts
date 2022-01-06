import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderOnlyLayoutComponent } from '../layouts/header-only-layout/header-only-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  // {
  //   path: '',
  //   component: HeaderComponent,
  //   children: [
  {
    path: 'login',
    component: HeaderOnlyLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'register',
    component: HeaderOnlyLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: RegisterComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
