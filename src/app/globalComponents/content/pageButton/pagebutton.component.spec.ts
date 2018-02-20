import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebuttonComponent } from './pagebutton.component';

describe('PagebuttonComponent', () => {
  let component: PagebuttonComponent;
  let fixture: ComponentFixture<PagebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
