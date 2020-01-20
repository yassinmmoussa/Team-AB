import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnorService {

  constructor(private http: HttpClient) { }

  postToConnor() {
    return this.http.post('/', {});
  }
}
