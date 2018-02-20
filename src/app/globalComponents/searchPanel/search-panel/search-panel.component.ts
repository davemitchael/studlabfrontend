import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {CourseService} from '../../../../services/course/course.service';
import {VariantService} from '../../../../services/variant/variant.service';
import {TypeWorkService} from '../../../../services/typeWork/type-work.service';
import {SubjectService} from '../../../../services/subject/subject.service';
import {CompletedtaskService} from '../../../../services/completedTask/completedtask.service';



@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  courses: number[];
  variants: number[];
  typeWorks: string[];
  subjects: string[];

  isTasksFound = false;

  constructor(private http: HttpClient,
              private courseService: CourseService,
              private variantService: VariantService,
              private typeWorkService: TypeWorkService,
              private subjectService: SubjectService,
              private completedTaskService: CompletedtaskService) {}

  ngOnInit() {
    this.initializePanels();
    this.getSubjects();
  }

  initializePanels() {
    this.courses = this.courseService.getAllCoursesNumber();
    this.typeWorks = this.typeWorkService.getAllTypeWorks();
    this.variants = this.variantService.getAllVariants();
  }

  getSubjects(course = 5) {
     this.subjectService.getAllSubjectsByCourse(course).then(_subjects => {
       this.subjects = _subjects;
     });
  }
  searchTasks(_typework, _subject, _variant) {
    this.completedTaskService.searchParameters =
      (_variant === 'undefined') ? {typeWork: _typework, subject: _subject,
        variant: undefined } : {typeWork: _typework, subject: _subject, variant: _variant };
    this.completedTaskService.searchTask();
    this.isTasksFound = true;
  }

}
