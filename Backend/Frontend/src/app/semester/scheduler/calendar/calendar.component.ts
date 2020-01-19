import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/Course';
import { data } from './data';
import { DayComponent } from './day/day.component';
import { dayConfig } from './day/dayConfig';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  dayNames: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];

  times = dayConfig.times;
  numBlocks = dayConfig.numBlocks;

  courseLists: Course[][] = this.buildCourseLists();

  buildCourseLists(): Course[][] {
    const res: Course[][] = [[], [], [], [], []];
    const courses = data.courses;
    Object.keys(courses).forEach(course => {
      for (const aDay of courses[`${course}`].days) {
        res[aDay].push(new Course(
          courses[`${course}`].duration,
          courses[`${course}`].dept,
          courses[`${course}`].instructor,
          courses[`${course}`].code,
          courses[`${course}`].starting_block,
          courses[`${course}`].colour,
          courses[`${course}`].name,
          courses[`${course}`].section,
          courses[`${course}`].days,
          courses[`${course}`].year,
          courses[`${course}`].session,
          courses[`${course}`].type,
          courses[`${course}`].labSection
        ));
      }
    });
    return res;
  }

  constructor() {}

  ngOnInit() {
    console.log(this.courseLists);
  }

}
