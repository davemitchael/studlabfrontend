import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {CompleteTask} from '../../../../models/CompleteTask';
import {CompletedtaskService} from '../../../services/completedTask/completedtask.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public numberOfTasks: number;
  public Tasks: CompleteTask[];
  public numberOfButton = [];
  constructor(private compTask: CompletedtaskService) {}
  ngOnInit() {
   this.getTasks();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getTasks() {
  this.compTask.Tasks.takeUntil(this.ngUnsubscribe).subscribe(value => {
      this.Tasks = value;
    });
   this.compTask.numberofAllTasks.takeUntil(this.ngUnsubscribe).subscribe(count => {
     this.numberOfTasks = count;
   });
  }

  getNumberOfButton() {
    this.numberOfButton.length = 0;
    for (let i = 0, j = 0; i < this.numberOfTasks; i += 5, j++) {
      this.numberOfButton.push(j + 1);
    }
    return this.numberOfButton;
  }

}
