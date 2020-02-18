import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../../../model/Course';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../../../modals/course-dialog/course-dialog.component';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  // @Input() coursesDuring: Course[]; // Add in later for better display algorithm
  @Input() set courses(cList: Course[]) {
    this.coursesStarting = cList;
  }
  @Output() courseStateChanged = new EventEmitter<Course>();

  @Input() blockNo: number;
  courseDialog: MatDialog;
  coursesStarting: Course[] = [];

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
      data: c,
      disableClose: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      // let cToUpdate = this.coursesStarting.find(course => course.courseRef === result.courseRef);
      // console.log('Updating... (old -> new)');
      // console.log(cToUpdate);
      // console.log(result);
      // cToUpdate = result;
      // console.log('Block course now is: ');
      // console.log(this.coursesStarting);
      this.courseStateChanged.emit(result);
      console.log(this.coursesStarting);
    });
  }

  ngOnInit() {
  }

}
