import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-semester-container',
  templateUrl: './semester-container.component.html',
  styleUrls: ['./semester-container.component.css']
})
export class SemesterContainerComponent implements OnInit {
  authenticated;
  constructor() { }

  ngOnInit() {
    if (this.getCookie('authenticated') !== 'true') {
      window.location.href = '/login';
    } else {
      this.authenticated = true;
    }
  }

  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}
