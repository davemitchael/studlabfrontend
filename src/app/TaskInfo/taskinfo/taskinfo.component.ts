import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompleteTask} from '../../../../models/CompleteTask';
import {CompletedtaskService} from '../../../services/completedTask/completedtask.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';
import index from '@angular/cli/lib/cli';
import {saveAs as importedSaveAs} from 'file-saver';

@Component({
  selector: 'app-taskinfo',
  templateUrl: './taskinfo.component.html',
  styleUrls: ['./taskinfo.component.css']
})
export class TaskinfoComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  url: any;
  task: CompleteTask;
  constructor(private route: ActivatedRoute,
              private completedtaskService: CompletedtaskService,
              private sanitizer: DomSanitizer,
              private router: Router) { }

  ngOnInit() {
    const index: string = this.route.snapshot.paramMap.get('index');
    this.completedtaskService.getTaskById(index).then(task => {
      this.task = task as CompleteTask;
      this.url =  task['url']; // `https://drive.google.com/viewerng/viewer?url=$}&embedded=true`;
    }) ;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  downloadFile() {
    this.completedtaskService.downloadFile(this.task._id).subscribe(file => {
      importedSaveAs(file, this.task.name);
    });
  }

}
