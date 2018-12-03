import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../user_mocks';
import {Assigment} from '../assigment';
import {Task} from '../task';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
    this.users = USERS;
  }

  getUserByName(userName: string): User {
    const result = this.users.filter( user => user.name === userName );
    // console.log(result[0]);
    return result[0];
  }

  getUserAssigments(userName: string): Assigment[] {
    console.log(this.getUserByName(userName).tasks);
    return this.getUserByName(userName).tasks;
  }

  getAssigmentsByDay(userName: string, day: string): Assigment[] {
    let tasks: Assigment[];
    const UserTasks = this.getUserAssigments(userName);
    tasks = UserTasks.filter(task => task.days.includes(day));
    return tasks;
  }
}
