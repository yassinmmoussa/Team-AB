import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../../../model/Course';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseDialogComponent } from '../../../modals/course-dialog/course-dialog.component';

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
  courseDialog: MatDialog;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, dialog: MatDialog) {
    iconRegistry.addSvgIcon(
        'lecture-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/people-outline.svg'));
    iconRegistry.addSvgIcon(
      'lab-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/flask.svg'));
    this.courseDialog = dialog;
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

  openCourseDialog(c: Course) {
    const dialogRef = this.courseDialog.open(CourseDialogComponent, {
      width: '800px',
      height: '700px',
      data: c
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Do something with the updated course here');
    });
  }

  ngOnInit() {
  }

}
