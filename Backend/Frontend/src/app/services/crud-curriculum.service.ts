import { Injectable } from '@angular/core';
import { Curricula } from '../model/Curricula';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { yearsPerPage } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CrudCurriculumService {

  constructor(private http: HttpClient) { }
  curriculaUrl = '/api/curricula';

  /**
   * POST new curricula to the database
   * @param curricula The curricula you wish to add to the database
   */
  addNewCurriculum(curriculum: Curricula): Observable<Curricula> {
    console.log('adding a curricula');
    const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const curriculumData = curriculum.toJSON();
    const updateData = { curriculum: curriculumData };
    return this.http.post<Curricula>(this.curriculaUrl, updateData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // PUT Request to update existing curricula
  updateCurriculum(curriculum: Curricula) {
    console.log('updating curricula in crud service');
    const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const curriculumData = curriculum.toJSON();
    const updateData = { curriculum: curriculumData };
    return this.http.put(this.curriculaUrl, updateData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // DELETE a curricula
  deleteCurriculum(curriculum: Curricula): Observable<{}> {
    // Destructuring (extracting) data from curriculum
    let { year, session, dept, name, curriculaRef, courseRefs } = curriculum;
    console.log('deleting curricula');
    const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.delete(this.curriculaUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: {
        year,
        session,
        dept,
        name,
        curriculaRef,
        courseRefs
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
}
