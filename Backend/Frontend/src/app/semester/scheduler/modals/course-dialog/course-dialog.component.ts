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
  oldCourse: Course;

  dayOptions = [0, 1, 2, 3, 4];

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.course = data;
    this.oldCourse = Object.assign({}, data); // Clone course
  }

  ngOnInit() {}

  getCourseIconName(c: Course): string {
    if (c.type === 'lecture') {
      return 'lecture-icon';
    } else {
      return 'lab-icon';
    }
  }

  daysChange(day: number, $event) {
    if ($event.checked && !this.course.days.includes(day)) {
      this.course.days.push(day);
      this.course.days.sort();
    } else {
      const newArr: [number] = [null];
      newArr.pop();
      this.course.days.forEach(oldDay => {
        if (oldDay !== day) {
          newArr.push(oldDay);
        }
      });
      this.course.days = newArr;
    }
  }

}
