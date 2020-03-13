import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../../model/Course';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {
  @Input() course: Course;
  @Output() courseToggled = new EventEmitter<Course>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'lecture-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/people-outline.svg'));
  iconRegistry.addSvgIcon(
    'lab-icon',
    sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/flask.svg'));

  }

  iconType(): String {

    if (this.course.type === 'lecture') {
      return '../../../../../assets/people-outline.svg';
    } else {
      return '../../../../../assets/flask.svg';
    }

  }

  changeCourse(){
      this.courseToggled.emit(this.course)
  }

  ngOnInit() {
  }

}
