import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.getCookie('authenticated'));
    if (this.getCookie('authenticated') !== 'true') {
      // window.location.href = '/';
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

  checkLogin(username, password) {
    this.error = '';
    console.log(username, password);
    if (!!username && !!password) {
      this.dataService.authenticate(username, password).subscribe(data => {
        console.log(data);
        const authData: any = data;
        if (authData.authenticated) {
          this.setCookie('authenticated', authData.authenticated, 1);
          console.log('redirecting');
          window.location.href = '';
        } else {
          this.error = 'Username or password incorrect';
        }
      });
    } else {
      this.error = 'Username and password are required';
    }
  }

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
}
