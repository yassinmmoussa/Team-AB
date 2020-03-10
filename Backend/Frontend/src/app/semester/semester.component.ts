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
  coursesToDisplay: Course[];
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
   * Find the course with corresponding ref.
   * @param ref The ref value of the course you wish to find.
   */
  getCourseByRef(ref: string): Course {
    for (const c of this.courses) {
      if (c.courseRef === ref) {
          return c;
        }
    }
  }

  /**
   * Finds the course with matching courseRef and updates it with
   * the rest of the new course information. If the course does not
   * exist, this does nothing.
   * @param course The course you wish to update.
   */
  updateCourse(course) {
    let c;
    for (let i = 0; i < this.courses.length; i++) {
      c = this.courses[i];
      if (c.courseRef === course.courseRef) {
          this.courses[i] = course;
        }
    }
    this.buildCourseLists(this.courses);
  }

 /**
  * @Param course - The course that I want to add to the course list.
  */
  addCourse(course) {
    // Add to course list
    this.courses.push(course);
    // Add to displayed courses so we see the course that we just added.
    this.coursesToDisplay.push(course);
    this.buildCourseLists(this.courses);
  }

  buildCourseLists(courses): Course[] {
    const res: Course[] = [];

    Object.keys(courses).forEach(courseRef => {
      res.push(new Course(
        '' + courses[`${courseRef}`].code,
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

  /**
   * Handler to update course information with data from scheduler
   *
   * @param data: Data from the PCS
   */
  updateWithOptimization(data) {
    for (const soln of data.solutions) {
      for (const sCurricula of soln.curricula) {
        for (const sCourse of sCurricula.courses) {
          this.updateCourseWithOptimizedData(sCourse);
        }
      }
    }
    this.filterCourses();
  }

  /**
   * Helper method to update course information from optimizer data.
   */
  updateCourseWithOptimizedData(courseData) {
    const courseToUpdate = this.getCourseByRef(courseData.course_id);
    // Update days
    courseToUpdate.days = [];
    for (const dayData of courseData.schedule) {
      courseToUpdate.days.push(dayData.day);
    }
    // Update startingBlock
    courseToUpdate.startingBlock = courseData.schedule[0].start;
    // Update duration
    // courseToUpdate.duration = courseData.schedule[0].duration;

    console.log('Updated', courseToUpdate);
  }

}
