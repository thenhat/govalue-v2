import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {PageLayoutModule} from '../shared/page-layout/page-layout.module';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
})
export class PageModule {}
