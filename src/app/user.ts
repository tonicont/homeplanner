import { Assigment } from './assigment';

export class User {
  name: string;
  tasks: Assigment[];
  constructor(name: string, tasks: Assigment[]){
    this.name = name;
    this.tasks = tasks;
  }
}
