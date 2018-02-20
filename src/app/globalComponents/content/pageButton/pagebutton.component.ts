import { Component, OnInit, Input } from '@angular/core';
import {CompletedtaskService} from '../../../../services/completedTask/completedtask.service';

@Component({
  selector: 'app-pagebutton',
  templateUrl: './pagebutton.component.html',
  styleUrls: ['./pagebutton.component.css']
})
export class PagebuttonComponent implements OnInit {
  @Input() number;
  constructor(private compTask: CompletedtaskService) { }

  ngOnInit() {
  }
  getTasksByNumber(num) {
    this.compTask.searchTaskByPageNumber(+num);
  }
}
