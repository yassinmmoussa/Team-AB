import { Component, OnInit, Input } from '@angular/core';
import {data} from '../../../scheduler/calendar/data.js'
import {Course} from '../../../../model/Course'
import {MatCardModule, MatCard} from '@angular/material/card';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {


  @Input() course: Course;

  // name: String;
  // year: number;
  // section: String;
  // type: String;
  // dept: String;
  // colour: String;
  // labSection?: String;




  constructor() {

    console.log(this.course)
    
    // this.name = "Hello"
    // this.year = this.course.year
    // this.section = this.course.section;
    // this.type = this.course.type;
    // this.dept = this.course.dept;
    // this.colour = this.course.colour;
    // if (this.type === 'lab'){
    //   this.labSection = this.course.labSection;
    // }

  


  }

  ngOnInit() {
  }

}
