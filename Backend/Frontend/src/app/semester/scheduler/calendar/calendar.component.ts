import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../model/Course';
import { dayConfig } from './day/dayConfig';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() set courses(courseList: Course[]) {
    this.allCourses = courseList;
    this.buildCourseLists(this.allCourses);
  }

  dayNames: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

  times = dayConfig.times;
  numBlocks = dayConfig.numBlocks;

  courseLists: Course[][];
  allCourses: Course[];

  buildCourseLists(courseList: Course[]) {
    if (courseList) {
      const res: Course[][] = [[], [], [], [], []];
      courseList.forEach(course => {
        for (const aDay of course.days) {
          res[aDay].push(course);
        }
      });
      this.courseLists = res;
    }
  }

  constructor() {
    this.courseLists = [[], [], [], [], []];
  }

  ngOnInit() {}

  updateCourse(course: Course) {
    for (let i = 0; i < this.allCourses.length; i++) {
      if (this.allCourses[i].courseRef === course.courseRef) {
        this.allCourses[i] = course;
      }
    }
    this.buildCourseLists(this.allCourses); // Redraw the courses
  }

}
