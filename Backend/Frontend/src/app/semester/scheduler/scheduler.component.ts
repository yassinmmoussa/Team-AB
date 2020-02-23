import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/Course';
import { Curricula } from 'src/app/model/Curricula';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  @Input() coursesToDisplay: Course[];
  @Input() allCourses: Course[];
  @Input() curricula: Curricula[];
  @Output() updateWithOptimization = new EventEmitter();
  @Output() courseUpdated = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

}
