import { Component, OnInit } from '@angular/core';
import {data} from '../../scheduler/calendar/data.js'
import {Course} from '../../../model/Course'
import {CourseEntryComponent} from './course-entry/course-entry.component'
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList: Course[] = [];

  populateCourses(): Course[]{
    let localCourseList: Course[] = [];
    const courses = data.courses;
    Object.keys(courses).forEach(courseRef => {

        localCourseList.push(new Course(
          courses[`${courseRef}`].duration,
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
          courses[`${courseRef}`].labSection
        ))

    })



    return localCourseList;


    
  }


  constructor() {
    this.courseList = this.populateCourses();

   }

  ngOnInit() {
  }

}
