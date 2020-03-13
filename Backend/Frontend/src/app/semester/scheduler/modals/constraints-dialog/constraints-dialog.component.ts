import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Course } from 'src/app/model/Course';
import { Curricula } from 'src/app/model/Curricula';

@Component({
  selector: 'app-constraints-dialog',
  templateUrl: './constraints-dialog.component.html',
  styleUrls: ['./constraints-dialog.component.css']
})
export class ConstraintsDialogComponent implements OnInit {

  courses: Course[];
  curricula: Curricula[];
  editing
  
  constructor(private dataService: DataService, public dialogRef: MatDialogRef<CourseDialogComponent>,
         @Inject(MAT_DIALOG_DATA) public data: {courses: Course[], curricula: Curricula[]}
  ) {
    this.curricula = data.curricula;
    console.log(this.curricula)
    this.courses = data.courses;
    this.editing = false;
  }

  ngOnInit() {
  }

  editCurriculum(curriculum: Curricula) {
    console.log("AA", curriculum)
    // edit courses
    this.editing = true;
  }

}
