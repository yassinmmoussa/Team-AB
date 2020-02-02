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
      height: '800px',
      data: c
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Do something with the updated course here');
    });
  }

  ngOnInit() {
  }

}
