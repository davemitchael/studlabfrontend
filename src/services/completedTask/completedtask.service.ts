import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {CompleteTask} from '../../../models/CompleteTask';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class CompletedtaskService {

  private _Tasks: BehaviorSubject<CompleteTask[]> = new BehaviorSubject<CompleteTask[]>([]);
  private _numberofAllTasks: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _searchParams = {
    typeWork: String,
    subject: String,
    variant: Number
  };

  constructor(private http: HttpClient) {
  }

    set searchParameters(newParams) {
      this._searchParams = newParams;
  }

  get Tasks() {
    return this._Tasks;
  }

  set Tasks(value: BehaviorSubject<CompleteTask[]>) {
      this._Tasks.next(value.getValue());
  }

  get numberofAllTasks() {
    return this._numberofAllTasks;
  }

  set numberofAllTasks(newAllTasks: BehaviorSubject<number> ) {
    this._numberofAllTasks.next(newAllTasks.getValue());
  }
  private searchTasksWitoutVariants(params) {
    return this.http.get(`http://localhost:3000/searchTasks/${params.typeWork}/${params.subject}`).toPromise();
  }

 private searchTaskWithVariants(params) {
  return this.http.get(`http://localhost:3000/searchTasks/${params.typeWork}/${params.subject}/variant/
      ${params.variant}`).toPromise();
  }

  private searchTasksWitoutVariantsByPage(params, pageNumber) {
    return this.http.get(`http://localhost:3000/searchTasks/${params.typeWork}/${params.subject}/${pageNumber}`).toPromise();
  }
  private searchTaskWithVariantsByPage(params, pageNumber) {
   return this.http.get(`http://localhost:3000/searchTasks/${params.typeWork}/${params.subject}/variant/${params.variant}/
      ${pageNumber}`).toPromise();
  }

  searchTask() {
    if (!(undefined === this._searchParams.variant)) {
      this.searchTaskWithVariants(this._searchParams).then((tasks) => {
    this.numberofAllTasks = new BehaviorSubject<number>(tasks['numberOfAllTasks']);
    this.Tasks = new BehaviorSubject<CompleteTask[]>(tasks['tasks']);
  });
} else {
  this.searchTasksWitoutVariants({typeWork: this._searchParams.typeWork, subject: this._searchParams.subject}).then(tasks => {
    this.numberofAllTasks = new BehaviorSubject<number>(tasks['numberOfAllTasks']);
    this.Tasks = new BehaviorSubject<CompleteTask[]>(tasks['tasks']);
  });
}
  }

  searchTaskByPageNumber(pageNumber) {
    if (!(undefined === this._searchParams.variant)) {
      this.searchTaskWithVariantsByPage(this._searchParams, pageNumber).then(tasks => {
        this.Tasks = new BehaviorSubject<CompleteTask[]>(tasks as CompleteTask[]);
      });
    } else {
      this.searchTasksWitoutVariantsByPage({typeWork: this._searchParams.typeWork, subject: this._searchParams.subject},
        pageNumber).then(tasks => {
        this.Tasks = new BehaviorSubject<CompleteTask[]>(tasks as CompleteTask[]);
      });
    }
  }
  getTaskById(_id) {
    return this.http.get(`http://localhost:3000/task/${_id}`).toPromise();
  }
  downloadFile(_id): any {
    return this.http.get(`http://localhost:3000/task/download/${_id}` , {responseType: 'blob' })
      .map(res => res);
  }
}
