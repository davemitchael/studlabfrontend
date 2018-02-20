import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './globalComponents/navBar/navbar/navbar.component';
import { SearchPanelComponent } from './globalComponents/searchPanel/search-panel/search-panel.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {CourseService} from '../services/course/course.service';
import { TypeWorkService } from '../services/typeWork/type-work.service';
import { VariantService } from '../services/variant/variant.service';
import { SubjectService } from '../services/subject/subject.service';
import { CompletedtaskService } from '../services/completedTask/completedtask.service';
import { ContentComponent } from './globalComponents/content/content.component';
import { FoundTasksComponent } from './globalComponents/content/foundTasks/found-tasks.component';
import { PagebuttonComponent } from './globalComponents/content/pageButton/pagebutton.component';
import { FooterComponent } from './globalComponents/footer/footer/footer.component';
import { TaskinfoComponent } from './TaskInfo/taskinfo/taskinfo.component';
import { MainviewComponent } from './mainview/mainview.component';
import { RegistrationComponent } from './registration/registration.component';
import {ModalService} from '../services/modalService/modal-service';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  {path: 'main', component: MainviewComponent},
  {path: 'taskInfo/:index', component: TaskinfoComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo: '/main', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPanelComponent,
    ContentComponent,
    FoundTasksComponent,
    PagebuttonComponent,
    FooterComponent,
    TaskinfoComponent,
    MainviewComponent,
    RegistrationComponent,
    ModalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService, TypeWorkService, VariantService, SubjectService, CompletedtaskService, ModalService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
