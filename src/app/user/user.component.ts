import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Assigment} from '../assigment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];
  assigments: Assigment[] = [];
  newUserName: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersFromDatabase();
  }

  addUser(): void {
    const user = new User('', this.newUserName, this.assigments);
    if (user.name !== 'undefined') {
      this.userService.addUser(user);
      console.log('Usuario creado => ' + user.name);
    } else {
      alert('El nombre de usuario es obligatorio');
      console.log('Nombre incorrecto');
    }
  }

  getUserByName(userName: string): User {
    const result = this.users.filter( user => user.name === userName );
    return result[0];
  }

  getUserAssigments(userName: string): Assigment[] {
    const assigments = this.getUserByName(userName).tasks;
    if (assigments) {
      return assigments;
    } else {
      return [];
    }
  }

  getAssigmentsByDay(userName: string, day: string): Assigment[] {
    let tasks: Assigment[];
    const UserTasks = this.getUserAssigments(userName);
    tasks = UserTasks.filter(task => task.days.includes(day));
    return tasks;
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId);
  }


  /**
   * MOVE TO SERVICE
   */
  getUsersFromDatabase(): void {
    const users = [];
    this.userService.getUsersfromDatabase().then(function (userList) {
      userList.forEach(function(userListItem) {
        const tasks = userListItem.val().tasks ? userListItem.val().tasks : [];
        const user = new User(userListItem.key, userListItem.val().name, tasks);
        users.push(user);
      });
    });
    this.users = users;
  }
}

