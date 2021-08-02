import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  public toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    // if it is true, true will be passed in .next() and vice-versa
    this.subject.next(this.showAddTask);
  }

  public onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
