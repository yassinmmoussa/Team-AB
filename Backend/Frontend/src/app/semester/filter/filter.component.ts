import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() coursesToDisplay: Course[];
  @Output() updateGlobalFilters = new EventEmitter();
  @Output() courseAdded = new EventEmitter<Course>();
  @Output() courseUpdated = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {}


}
