import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundTasksComponent } from './found-tasks.component';

describe('FoundTasksComponent', () => {
  let component: FoundTasksComponent;
  let fixture: ComponentFixture<FoundTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
