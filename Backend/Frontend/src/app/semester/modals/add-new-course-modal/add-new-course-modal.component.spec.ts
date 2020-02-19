import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseModalComponent } from './add-new-course-modal.component';

describe('AddNewCourseModalComponent', () => {
  let component: AddNewCourseModalComponent;
  let fixture: ComponentFixture<AddNewCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
