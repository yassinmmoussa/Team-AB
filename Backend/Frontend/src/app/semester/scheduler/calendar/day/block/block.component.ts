import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../../../model/Course';
import { blockHeight } from '../dayConfig.js';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  // @Input() coursesDuring: Course[]; // Add in later for better display algorithm
  @Input() coursesStarting: Course[];
  @Input() session: string;
  @Input() blockNo: number;

  constructor() {}

  calcBlockWidth(): number {
    return 100 / this.coursesStarting.length;
  }

  ngOnInit() {
  }

}
