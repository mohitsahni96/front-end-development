import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl  = "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }

  //get task method
  public getTasks(): Observable<Task[]>{
    // const tasks = of(TASKS);
    // return tasks;
    //http request from backend
    return this.http.get<Task[]>(this.apiUrl);
  }

  //delete task method
  public deleteTask(task: Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  //task reminder method
  public updateTaskReminder(task: Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  //add task
  public addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }


}
