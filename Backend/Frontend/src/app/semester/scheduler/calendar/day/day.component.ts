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

 coursesStartingAtBlock(n: number): Course[] {
  const res: Course[] = [];
  this.courses.forEach((course) => {
    if (course.startingBlock === n) {
      res.push(course);
    }
  });
  return res;
}

}
