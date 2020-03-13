import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Course } from 'src/app/model/Course';
import { Curricula } from 'src/app/model/Curricula';
import { CrudCurriculumService } from 'src/app/services/crud-curriculum.service';

@Component({
  selector: 'app-constraints-dialog',
  templateUrl: './constraints-dialog.component.html',
  styleUrls: ['./constraints-dialog.component.css']
})
export class ConstraintsDialogComponent implements OnInit {

  courses: Course[];
  curricula: Curricula[];
  editing: number;
  
  constructor(private dataService: DataService, public dialogRef: MatDialogRef<CourseDialogComponent>,
        private crudCurriculumService: CrudCurriculumService,
        @Inject(MAT_DIALOG_DATA) public data: {courses: Course[], curricula: Curricula[]}
  ) {
    this.curricula = data.curricula;
    console.log(this.curricula)
    this.courses = data.courses;
    this.editing = -1;
  }

  ngOnInit() {
  }

  editCurriculum(curriculum: Curricula) {
    console.log(this.curricula.indexOf(curriculum))
    console.log("AA", curriculum)
    console.log(this.courses)
    // TODO: edit courses
    this.courses.forEach(course => course.display = curriculum.courseRefs.includes(course.courseRef));
    this.courses.sort((course1, course2) => course1.display ? -1 : 1)
    this.editing = this.curricula.indexOf(curriculum);
  }

  saveCurriculum() {
    let newCourseRefs = [];
    this.courses.forEach(course => {
      if (course.display) {
        newCourseRefs.push(course.courseRef);
      }
    })

    this.curricula[this.editing].courseRefs = newCourseRefs;
    console.log(this.curricula[this.editing])
    this.crudCurriculumService.updateCurriculum(this.curricula[this.editing]).subscribe(res => console.log(res));
    // this.courseStateChanged.emit(this.curricula[this.editing]);
    this.editing = -1;
  }

  deleteCurriculum() {
    this.crudCurriculumService.deleteCurriculum(this.curricula[this.editing]).subscribe(() => {});
    // this.courseDeleted.emit(this.curricula[this.editing]);
  }

  courseChanged() {

  }

}
