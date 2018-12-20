import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username;
  logged;

  constructor(private router: Router) { }

  ngOnInit() {
    const user = firebase.auth().currentUser;
    if(user) {
      this.logged = true;
      this.username = user.email;
    } else {
      this.logged = false;
      this.router.navigate(['/login']);
    }
  }

}
