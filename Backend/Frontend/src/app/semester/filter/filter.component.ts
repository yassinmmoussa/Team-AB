import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() updateGlobalFilters = new EventEmitter();
  @Output() courseStateChanged = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  updateCourse(course) {
    this.courseStateChanged.emit(course)
  }

  updateFilters(filters) {
    this.updateGlobalFilters.emit(filters);
  }


}
