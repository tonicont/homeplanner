import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const config = {
      apiKey: 'AIzaSyC8LAmkrNcHOwuNKCivtHyFXhgG27FrEzQ',
      authDomain: 'homeplanner-4c60c.firebaseapp.com',
      databaseURL: 'https://homeplanner-4c60c.firebaseio.com',
      projectId: 'homeplanner-4c60c',
      storageBucket: 'homeplanner-4c60c.appspot.com',
      messagingSenderId: '533064295495'
    };
    firebase.initializeApp(config);
  }
}
