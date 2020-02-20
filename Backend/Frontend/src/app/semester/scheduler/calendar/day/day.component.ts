import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { dayConfig } from './dayConfig';
import { BlockComponent } from './block/block.component';
import { Course } from '../../../../model/Course';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() name: string;
  @Input() set courseList(courseList: Course[]) {
    // Reset data
    this.blocks = [];
    for (let i = 0; i < this.numBlocks; i++) {
      this.blocks.push([]);
    }
    // Update data
    this.courses = courseList;
    this.courses.forEach(course => this.blocks[course.startingBlock].push(course));
  }

  @Output() courseUpdated = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();

  courses: Course[];
  numBlocks = dayConfig.numPeriodsPerDay;

  // One array of courses for each block
  blocks: Course[][] = [];

  constructor() {}

  ngOnInit() {}

  propogateDelete(course) {
    this.courseDeleted.emit(course)
  }
}
