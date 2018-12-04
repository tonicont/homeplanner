import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

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

  getUsersfromDatabase(): any {
    const database = firebase.database();
    return database.ref('users').on('value', function() {});
  }

  addUser(user: User): void {
    const database = firebase.database();
    database.ref('users/3').set({
      name: user.name,
      tasks: user.tasks
    });
  }
}
