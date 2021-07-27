import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

  }

  //set Dynamic classes
  public setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  public onToggle(todo: any) {
    //toglle in UI chnages
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted((todo).subscribe((todo: any) =>
    console.log(todo)));
  }
  public onDelete(todo: any) {
    this.deleteTodo.emit(todo);
  }

}
