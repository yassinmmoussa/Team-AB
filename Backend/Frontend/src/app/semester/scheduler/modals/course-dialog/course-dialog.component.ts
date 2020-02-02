import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/model/Course';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  course: Course;

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.course = data;
  }

  ngOnInit() {

  }

  getCourseIconName(c: Course): string {
    if (c.type === 'lecture') {
      return 'lecture-icon';
    } else {
      return 'lab-icon';
    }
  }

}
