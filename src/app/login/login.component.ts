import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor() {  }

  ngOnInit() {
  }

  createUser(): void {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function() {
      const user = firebase.auth().currentUser;
      firebase.database().ref('users/' + user.uid).set({
        displayName: user.displayName || user.email,
        email: user.email,
        profile_picture : ''
      });
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log('ERROR: ' + errorMessage );
    });
  }

  login(): void {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log('ERROR: ' + errorMessage );
    });
  }
}
