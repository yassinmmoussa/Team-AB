import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../semester/scheduler/calendar/data';
import { of } from 'rxjs';

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
    // return of(data.courses);
  }

  getCurricula() {
    return this.http.get('/api/curricula', {
      params: {
        year: '2020',
        session: 'W'
      }
    });
  }


}
