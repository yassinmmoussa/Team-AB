import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/Course';
import { Curricula } from 'src/app/model/Curricula';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  @Input() courses: Course[];
  @Input() allCourses: Course[];
  @Input() curricula: Curricula[];

  @Output() courseDeleted = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

}
