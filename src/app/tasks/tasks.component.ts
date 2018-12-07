import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import {User} from '../user';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  newTaskDesc: string;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getUsersFromDatabase();
  }

  getUsersFromDatabase(): void {
    const tasks = [];
    this.tasksService.getTasksfromDatabase().then(function (tasksList) {
      tasksList.forEach(function(tasksListItem) {
        const task = new Task(tasksListItem.key, tasksListItem.val().desc);
        tasks.push(task);
      });
    });
    this.tasks = tasks;
  }

  createTask(): void {
    const newTas = new Task('', this.newTaskDesc);
    if (newTas.desc) {
      this.tasksService.addTask(newTas);
      console.log('Tarea añadida => ' + newTas.desc);
    } else {
      alert('La tarea debe contener una descripción');
      console.log('Error add task input ');
    }
  }

}
