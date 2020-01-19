import { Component, OnInit, Input } from '@angular/core';
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
  @Input() courses: Course[];
  @Input() session: string;

  numBlocks = dayConfig.numPeriodsPerDay;

  // One array of courses for each block
  blocks: Course[][] = [];

  constructor() {
    // Initialize blocks array
    for (let i = 0; i < this.numBlocks; i++) {
      this.blocks.push([]);
    }
  }

  ngOnInit() {
    // populate blocks array
    this.courses.forEach((course) => {
      if (course.session === this.session) {
        this.blocks[course.startingBlock].push(course);
      }
    });
  }



}
