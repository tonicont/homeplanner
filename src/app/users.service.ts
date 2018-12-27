import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUserById(userId: string): any {
    const database = firebase.database();
    return database.ref('users/' + userId).once('value');
  }
}
