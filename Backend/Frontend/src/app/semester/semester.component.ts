import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../model/Course';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  courses: Course[];
  coursesToDisplay: Course[];
  filters;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    console.log('Got courses');
    this.dataService.getCourses().subscribe(data => {
      this.courses = this.buildCourseLists(data);
      console.log(this.courses);
    });
  }

  updateFilters(filters) {
    this.filters = filters;

    // Add display property to courses
    this.courses.forEach(course => {
      course.display = false;
    });

    // Apply all filters
    this.filters.forEach(filter => {
      this.courses.forEach(course => {
        const sameDept = course.dept.toLowerCase() === filter.dept.toLowerCase();
        const sameType = course.type.toLowerCase() === filter.courseType.toLowerCase();
        const sameYear = (Math.floor(course.code / 1000) + '') === filter.courseYear;
        if (sameDept && sameType && sameYear) {
          course.display = true;
        }
      });
    });

    this.coursesToDisplay = this.courses.filter(course => course.display);
  }

  buildCourseLists(data): Course[] {
    const res: Course[] = [];
    const courses = data.courses;

    Object.keys(courses).forEach(courseRef => {
      res.push(new Course(
        courseRef,
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
      ));
    });
    return res;
  }

}
