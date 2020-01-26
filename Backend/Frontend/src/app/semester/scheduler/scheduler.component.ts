import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  @Input() courses: Course[];

  constructor() { }

  ngOnInit() {
  }

}
