import { Injectable } from '@angular/core';
import {Subject} from '../../../models/Subject';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class SubjectService {

  url = 'http://localhost:3000/';
  subjects = [];
  constructor(private http: HttpClient) {
  }

  private getSubjectsByCourse(course) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + course).subscribe(subjects => {
        resolve(subjects);
      });
    });
  }

  getAllSubjectsByCourse(course) {
    return this.getSubjectsByCourse(course).then(subjects => {
      this.subjects.length = 0;
        for ( const item in subjects ) {
          this.subjects.push(subjects[item].name);
        }
      return this.subjects;
      });
  }

}
