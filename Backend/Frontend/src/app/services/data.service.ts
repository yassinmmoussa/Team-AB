import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Course } from '../model/Course';
import { Curricula } from '../model/Curricula';
import { data } from '../semester/scheduler/calendar/data';
import { of, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('/api/courses', {
      params: {
        year: '2020',
        session: 'W'
      }
    });
  }

  getCurricula() {
    return this.http.get('/api/curricula', {
      params: {
        year: '2020',
        session: 'W'
      }
    });
  }

  runOptimizer(courses: Course[], curricula: Curricula[]) {
    // console.log(`${courses.map(course => course.toJSON())}`);
    // console.log(`${curricula.map(curr => curr.toJSON())}`);
    const optimizerURL = '/api/schedule/runOptimizer';
    const courseData = `${courses.map(course => course.toJSON())}`;
    const curriculaData = `${curricula.map(curr => curr.toJSON())}`;
    const optimizerData = { courses: courseData, curricula: curriculaData };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(optimizerURL, optimizerData, config).pipe(
      catchError(this.handleError)
    );
  }

  authenticate(username: string, password: string) {
    return this.http.post('/api/auth', {
      params: {
        username,
        password
      }
    });
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
