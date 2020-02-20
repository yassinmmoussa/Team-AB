import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../model/Course';
import { Curricula } from '../model/Curricula';
import { ColorMap } from '../model/ColorMap';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  courses: Course[];
  curricula: Curricula[];
  coursesToDisplay: Course[]=[];
  filters;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCourses();
    this.getCurricula();
  }

  getCourses() {
    this.dataService.getCourses().subscribe(data => {
      this.courses = this.buildCourseLists(data);
    });
  }

  removeCourseManually(deletedCourse) {
    this.courses = this.courses.filter(course => {
      const sameYear = deletedCourse.year === course.year;
      const sameSession = deletedCourse.session === course.session;
      const sameDept = deletedCourse.dept === course.dept;
      const sameCode = deletedCourse.code === course.code;
      const sameSection = deletedCourse.section === course.section;
      const sameType = deletedCourse.type === course.type;

      return !(sameYear && sameSession && sameDept && sameCode && sameSection && sameType);
    });

    this.filterCourses();
  }

  getCurricula() {
    this.dataService.getCurricula().subscribe(data => {
      this.curricula = this.buildCurriculaList(data);
    });
  }


  updateFilters(filters) {
    console.log(filters);
    this.filters = filters;

    this.filterCourses();
  }

  filterCourses() {
    // Add display property to courses
    this.courses.forEach(course => {
      course.display = false;
    });

    // Apply all filters
    this.filters.forEach(filter => {
      this.courses.forEach(course => {
        const sameDept = course.dept.toLowerCase() === filter.dept.toLowerCase();
        const sameType = course.type.toLowerCase() === filter.courseType.toLowerCase();
        const sameYear = ('' + Math.floor(course.code / 1000)) === filter.courseYear;
        if (sameDept && sameType && sameYear) {
          course.display = true;
        }
      });
    });

    this.coursesToDisplay = this.courses.filter(course => course.display);
  }

  /**
  * @Param course - The course that I want to add to the course list.
  */
  updateList(course){
    // Add to course list
    this.courses.push(course);
    // Add to displayed courses so we see the course that we just added.
        this.coursesToDisplay.push(course);

    console.log(this.courses);

  }

  buildCourseLists(courses): Course[] {
    const res: Course[] = [];

    Object.keys(courses).forEach(courseRef => {
      res.push(new Course(
        courseRef,
        courses[`${courseRef}`].duration,
        courses[`${courseRef}`].dept,
        courses[`${courseRef}`].instructor,
        courses[`${courseRef}`].code,
        courses[`${courseRef}`].starting_block,
        ColorMap.getColor(courses[`${courseRef}`].dept), // Derive color based on dept
        courses[`${courseRef}`].name,
        courses[`${courseRef}`].section,
        courses[`${courseRef}`].days,
        courses[`${courseRef}`].year,
        courses[`${courseRef}`].session,
        courses[`${courseRef}`].type,
        courses[`${courseRef}`].labSection,
        undefined,
        undefined,
        undefined,
        undefined,
        courses[`${courseRef}`].blocks_per_wk
      ));
    });
    return res;
  }

  buildCurriculaList(curriculaJSON): Curricula[] {
    const res: Curricula[] = [];
    Object.keys(curriculaJSON).forEach(curriculaRef => {
      res.push(new Curricula(
        curriculaRef,
        curriculaJSON[`${curriculaRef}`].dept,
        curriculaJSON[`${curriculaRef}`].name,
        curriculaJSON[`${curriculaRef}`].session,
        curriculaJSON[`${curriculaRef}`].year,
        curriculaJSON[`${curriculaRef}`].courses
      ));
    });
    return res;
  }

  getCoursesInCurricula(curr: Curricula): Course[] {
    const testCurr: Curricula = curr;
    return this.courses.filter((course: Course) => {
      const filterRes: Course[] = [];
      if (testCurr.hasCourse(course)) {
        filterRes.push(course);
      }
      return filterRes;
    });
  }

}
