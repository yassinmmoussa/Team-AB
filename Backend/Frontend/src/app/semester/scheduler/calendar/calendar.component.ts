import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/Course';
// import { currentlyShowing } from './currentlyShowing';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days = [
    {name: "Monday"},
    {name: "Tuesday"},
    {name: "Wednesday"},
    {name: "Thursday"},
    {name: "Friday"}
  ];

  // courseLists: Course[][] = this.buildCourseLists();

  // buildCourseLists(): Course[][] {
  //   let res: Course[][] = [[], [], [], [], []];
  //   for (const course of currentlyShowing) {
  //     for (const aDay of course.days) {
  //       res[aDay].push(new Course(
  //         course.number,
  //         course.dept,
  //         course.instructor,
  //         course.code,
  //         course.starting_block,
  //         course.colour,
  //         course.name,
  //         course.section,
  //         course.days,
  //         course.year,
  //         course.session,
  //         course.type,
  //         course.labSection
  //       ));
  //     }
  //     return res;
  //   }

    

  // }

  constructor() { }

  ngOnInit() {
  }

}
