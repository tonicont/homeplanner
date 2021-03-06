import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {GroupDetailsComponent} from './group-details/group-details.component';


const ROUTES: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'group/:id', component: GroupDetailsComponent}
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
