import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudCoursesService {

  constructor(private http: HttpClient) { }
  courseUrl = '/api/courses';

  //POST to add a new course into the database
  addNewCourse(course: Course): Observable<Course>{
    console.log('adding a course');
    const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    const courseData = course.toJSON();
    const updateData = { course: courseData };
    return this.http.post<Course>(this.courseUrl, updateData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  //PUT Request to update existing courses
  updateCourse(course: Course) {
    console.log('updating course in crud service');
    const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    const courseData = course.toJSON();
    const updateData = { course: course };
    return this.http.put(this.courseUrl, updateData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  //DELETE a Course
  //ID is the strong from firestore
  // i.e 2FGQCYQVCPH4h4JQ3QCa
  deleteCourse(id :string): Observable<{}> {
    const url = '${this.courseUrl}/${id}';
    const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    return this.http.delete(url, httpOptions)
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
}
