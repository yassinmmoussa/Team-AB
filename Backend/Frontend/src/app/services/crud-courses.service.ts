import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudCoursesService {

  constructor(private http: HttpClient) { }
  courseUrl = '/api/courses';

  /**
   * POST new course to the database
   * @param course The course you wish to add to the database
   */
  addNewCourse(course: Course): Observable<Course> {
    console.log('adding a course');
    const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const courseData = course.toJSON();
    const updateData = { course: courseData };
    return this.http.post<Course>(this.courseUrl, updateData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // PUT Request to update existing courses
  updateCourse(course: Course) {
    console.log('updating course in crud service');
    const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const courseData = course.toJSON();
    const updateData = { course };
    return this.http.put(this.courseUrl, updateData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // DELETE a Course
  deleteCourse(course: Course): Observable<{}> {
    console.log('deleting course');
    const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const courseData = course.toJSON();
    const deleteData = { course: courseData };
    return this.http.delete(this.courseUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: {
        year: course.year + '',
        session: course.session,
        dept: course.dept,
        code: course.code + '',
        section: course.section,
        type: course.type
      }
    })
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }



  // NEW API

  /**
   * GET all course information for a given semester.
   * /api_goodV2/courses
   *
   * @returns JSON with Course information, ideally including expanded lecture/lab/tutorial info
   *
   * e.g. res = {
   *              course_1: {
   *                name: c_1_name,
   *                code: c_1_code,
   *                dept: c_1_dept,
   *                ...
   *                lectures: [ { lecture_1_info }, { lecture_2_info }, ... ],
   *                labs: [ { lecture_1_info }, { lecture_2_info }, ... ],
   *                tutorials: [ { lecture_1_info }, { lecture_2_info }, ... ]
   *               },
   *              course_2: {
   *                ...
   *              }
   *            }
   *
   */

   /**
    * 
    */
}
