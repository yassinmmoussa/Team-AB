import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  day: Day;

  constructor(d: Day) {
    this.day = d;
  }

  ngOnInit() {
  }

}
