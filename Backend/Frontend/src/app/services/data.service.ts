import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
