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
    return database.ref('users').once('value');
  }

  addUser(user: User): void {
    const database = firebase.database();
    const userListRef = database.ref('users');
    const newUserRef = userListRef.push();
    newUserRef.set({
      name: user.name,
      tasks: user.tasks
    });
  }

  deleteUser(userId: string): void {
    const database = firebase.database();
    const userRef = database.ref('users/' + userId);
    userRef.remove()
      .then(function() {
        console.log('Remove succeeded.');
      })
      .catch(function(error) {
        console.log('Remove failed: ' + error.message);
      });
  }
}
