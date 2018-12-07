import { Assigment } from './assigment';

export class User {
  id: string;
  name: string;
  tasks: Assigment[];
  constructor(id: string, name: string, tasks: Assigment[]) {
    this.id = id;
    this.name = name;
    this.tasks = tasks;
  }
}
