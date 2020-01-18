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

  blocks: BlockComponent[] = [];

  constructor() {
    for (let i = 0; i < this.numBlocks; i++) {
      this.blocks.push(new BlockComponent());
    }
  }

  ngOnInit() {
    console.log(this.courses);
  }

  // Don't think this'll be used anymore
 coursesStartingAtBlock(n: number): Course[] {
  const res: Course[] = [];
  this.courses.forEach((course) => {
    if (course.startingBlock === n && course.session === this.session) {
      res.push(course);
    }
  });
  return res;
}

coursesDuringBlock(n: number): Course[] {
  const res: Course[] = [];
  this.courses.forEach((course) => {
    const sBlock = course.startingBlock;
    if ((sBlock === n ||
        (sBlock < n && sBlock + course.duration >= n)) &&
        course.session === this.session) {
      res.push(course);
    }
  });
  return res;
}

}
