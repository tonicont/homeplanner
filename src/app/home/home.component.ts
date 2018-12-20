import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username;

  constructor() { }

  ngOnInit() {
    const user = firebase.auth().currentUser;
    if (user) {
      this.username = user.displayName;
    }
  }

}
