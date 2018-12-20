import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';


const ROUTES: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
