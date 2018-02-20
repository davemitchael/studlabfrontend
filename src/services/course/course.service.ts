import { Injectable } from '@angular/core';
import { Course } from '../../../models/Course';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {

  courses = [];
  constructor(private http: HttpClient) {}

  getCourses() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/courses').subscribe(_courses => {
        resolve(_courses);
      });
    });
  }

  getAllCoursesNumber(): number[] {
    this.courses.length = 0;
    this.getCourses().then(curses => {
      for(const item in curses) {
        this.courses.push(+curses[item].course);
      }
    });
    return this.courses;
  }

}
