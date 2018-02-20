import { Component, OnInit, Input } from '@angular/core';
import {CompleteTask} from '../../../../../models/CompleteTask';
import {CompletedtaskService} from '../../../../services/completedTask/completedtask.service';
import {saveAs as importedSaveAs} from 'file-saver';

@Component({
  selector: 'app-found-tasks',
  templateUrl: './found-tasks.component.html',
  styleUrls: ['./found-tasks.component.css']
})
export class FoundTasksComponent implements OnInit {
  @Input() task: CompleteTask;
  @Input() taskIndex: number;
  constructor(private completedtaskService: CompletedtaskService) { }

  ngOnInit() {
  }
  downloadFile() {
    this.completedtaskService.downloadFile(this.task._id).subscribe(file => {
      importedSaveAs(file, this.task.name);
    });
  }
}
