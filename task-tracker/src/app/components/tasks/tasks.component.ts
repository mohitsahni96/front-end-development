import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks:Task [] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //calling service for mockdata
    // this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) =>
    (this.tasks  = tasks));
  }
  //delete method for delete task
  public deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() =>
    (this.tasks  = this.tasks.filter(t => t.id !== task.id)));
  }
  //toggle reminder
  public toggleReminder(task: Task){
    task.reminder = !task.reminder;
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  public addTask(task: Task){
    // console.log(task);
    this.taskService.addTask(task).subscribe((task) =>
    (this.tasks.push(task)));
  }

}
