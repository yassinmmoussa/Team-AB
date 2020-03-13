import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {data} from '../../scheduler/calendar/data.js';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Course} from '../../../model/Course';
import {CourseEntryComponent} from './course-entry/course-entry.component'
import {MatListModule} from '@angular/material/list';
import {AddNewCourseModalComponent} from '../../modals/add-new-course-modal/add-new-course-modal.component';
import { CrudCoursesService } from '../../../services/crud-courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: Course[];
  courseList: Course[] = [];

  @Output() courseUpdated = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() courseAdded = new EventEmitter<Course>();
  populateCourses(): Course[] {
    const localCourseList: Course[] = [];
    const courses = data.courses;
    Object.keys(courses).forEach(courseRef => {
          //REORDER THIS
        localCourseList.push(new Course(
          courseRef,
          courses[`${courseRef}`].dept,
          courses[`${courseRef}`].instructor,
          courses[`${courseRef}`].code,
          courses[`${courseRef}`].starting_block,
          courses[`${courseRef}`].colour,
          courses[`${courseRef}`].name,
          courses[`${courseRef}`].section,
          courses[`${courseRef}`].days,
          courses[`${courseRef}`].year,
          courses[`${courseRef}`].session,
          courses[`${courseRef}`].type,
          courses[`${courseRef}`].display,
          courses[`${courseRef}`].labSection,
          courses[`${courseRef}`].willOptimize,
          courses[`${courseRef}`].capacity,
          courses[`${courseRef}`].room,
          courses[`${courseRef}`].blocksPerWeek,
        ));
    });
    return localCourseList;
  }


  constructor(public dialog: MatDialog, private crudCoursesService: CrudCoursesService) {
    // this.courseList = this.populateCourses(); Old
  }

  ngOnInit() {
    this.courseList = this.courses;
  }

  openAddCourseDialog(){
    const dialogRef = this.dialog.open(AddNewCourseModalComponent, {
      width: '800px',
      height: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log('Dialog closed', result);
     this.crudCoursesService.addNewCourse(result).subscribe(res => console.log(res));
     this.courseAdded.emit(result);
    });
  }

}
