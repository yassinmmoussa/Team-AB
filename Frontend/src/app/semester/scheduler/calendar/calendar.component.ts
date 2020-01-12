import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days = [
    {name: "Monday"},
    {name: "Tuesday"},
    {name: "Wednesday"},
    {name: "Thursday"},
    {name: "Friday"}
  ];



  constructor() { }

  ngOnInit() {
  }

}
