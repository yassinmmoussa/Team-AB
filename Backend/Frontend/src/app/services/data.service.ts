import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { data } from '../semester/scheduler/calendar/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get('/api/courses', {
      params: {
        year: '2020',
        session: 'W'
      }
    });
    
    // return of(data);
  }
}
