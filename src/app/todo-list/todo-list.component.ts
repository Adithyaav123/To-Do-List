import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  task: string = '';
  taskList: string[] = [];
  
  constructor(){
  const storedTasks = localStorage.getItem('taskList');
    if (storedTasks) {
      this.taskList = JSON.parse(storedTasks);
    }
  }

  addTask() {
    if (this.task === '') {
      alert("You must write something!");
    } else {
      this.taskList.push(this.task);
    }
    this.task = '';
    this.saveData();
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }

}
