import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../../../model/Course';
import { blockHeight } from '../dayConfig.js';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() courses: Course[];
  constructor() { }

  ngOnInit() {
    console.log('blockheight:' + this.blockHeight);
  }

}
