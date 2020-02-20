import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CrudCoursesService} from '../../../services/crud-courses.service';
import {Course} from '../../../model/Course'

@Component({
  selector: 'app-add-new-course-modal',
  templateUrl: './add-new-course-modal.component.html',
  styleUrls: ['./add-new-course-modal.component.css']
})
export class AddNewCourseModalComponent implements OnInit {





  InputFields = [];


  constructor(private crudCoursesService: CrudCoursesService) { }

  ngOnInit() {
    this.InputFields = [
      {
        "fieldText" : "Enter Year",
        "placeholder" : "i.e 2020",
        "fControl" : "year"
      },
      {
        "fieldText" : "Enter Session",
        "placeholder" : "i.e F",
        "fControl" : "session"
      },
      {
        "fieldText" : "Enter Department",
        "placeholder" : "i.e EECS",
        "fControl" : "department"
      },
      {
        "fieldText" : "Enter Course Name",
        "placeholder" : "i.e E-Commerce",
        "fControl" : "course_name"
      },
      {
        "fieldText" : "Enter Course Code",
        "placeholder" : "i.e 4413",
        "fControl" : "course_code"
      },
      {
        "fieldText" : "Enter Course Type",
        "placeholder" : "i.e Lecture",
        "fControl" : "course_type"
      },
      {
        "fieldText" : "Enter Duration",
        "placeholder" : "i.e 3",
        "fControl" : "duration"
      },
      {
        "fieldText" : "Enter Instructor",
        "placeholder" : "i.e Marin L",
        "fControl" : "instructor"
      },
      {
        "fieldText" : "Enter Location",
        "placeholder" : "i.e LSB 105",
        "fControl" : "location"
      }

    ]
  }

  addCourseForm = new FormGroup({
    year: new FormControl(''),
    session: new FormControl(''),
    department: new FormControl(''),
    course_name : new FormControl(''),
    course_code: new FormControl(''),
    course_type : new FormControl(''),
    duration : new FormControl(''),
    instructor : new FormControl(''),
    location : new FormControl('')
  });





  onAddCourse() {
    const newCourse = new Course(
        this.addCourseForm.value.year+this.addCourseForm.value.session+this.addCourseForm.value.department+this.addCourseForm.value.course_code,
        this.addCourseForm.value.duration,
        this.addCourseForm.value.department,
        this.addCourseForm.value.instructor,
        this.addCourseForm.value.course_code,
        0,
        null,
        this.addCourseForm.value.course_name,
        null,
        [],
        this.addCourseForm.value.year,
        this.addCourseForm.value.session,
        this.addCourseForm.value.course_type,
        true
      );

    // this.crudCoursesService.addNewCourse(newCourse).subscribe(res => console.log(res));
    // TODO: Use EventEmitter with form value
  //  console.warn(this.addCourseForm.value);
  return newCourse;
  }



}
