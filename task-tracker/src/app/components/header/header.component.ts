import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title:string = 'Task Tracker';
  public showAddTask: boolean = false;
  public subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value =>
      this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  public toggleAddTask() {
    // console.log('toggle');
    this.uiService.toggleAddTask();
  }

  public hasRoute(route: string){
    return this.router.url === route;
  }

}
