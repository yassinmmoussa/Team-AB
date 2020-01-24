import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../../../model/Course';
import { dayConfig } from '../dayConfig';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'lecture-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/people-outline.svg'));
    iconRegistry.addSvgIcon(
      'lab-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/flask.svg'));
  }

  calcBlockWidth(): number {
    return 100 / this.coursesStarting.length;
  }

  startTime(c: Course): string {
    return '' + this.blockToTime(c.startingBlock);
  }

  endTime(c: Course): string {
    return '' + this.blockToTime(c.startingBlock + c.duration + 1);
  }

  blockToTime(blockNo: number): string {
    let minute = '';
    let hour = '';
    let ampm = '';
    // Hour

    // 2: 2/2 = (1 + 7) % 12 = 8 + 1
    hour = '' + (((Math.floor(blockNo / 2) + 7) % 12) + 1);

    // Minute
    if (blockNo % 2 === 0) {
      minute = '00';
    } else {
      minute = '30';
    }

    // ampm
    if (blockNo > 8) {
      ampm = 'pm';
    } else {
      ampm = 'am';
    }

    const formattedEnding = (minute === '00') ? ampm : ':' + minute + ampm;
    return hour + formattedEnding;
  }

  getCourseIconName(c: Course): string {
    if (c.type === 'lecture') {
      return 'lecture-icon';
    } else {
      return 'lab-icon';
    }
  }

  ngOnInit() {
  }

}
