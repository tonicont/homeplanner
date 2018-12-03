import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../tasks_mock';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor() { }

  ngOnInit() {
    this.tasks = TASKS;
  }

}
