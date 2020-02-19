import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-new-course-modal',
  templateUrl: './add-new-course-modal.component.html',
  styleUrls: ['./add-new-course-modal.component.css']
})
export class AddNewCourseModalComponent implements OnInit {
  adminInputFields = [];
  courseInfoFields = [];
  additionalInfoFields = [];

  constructor() { }

  ngOnInit() {
    this.adminInputFields = [
      {
        "fieldText" : "Enter Year",
        "placeholder" : "i.e 2020"
      },
      {
        "fieldText" : "Enter Session",
        "placeholder" : "i.e F"
      },
      {
        "fieldText" : "Enter Department",
        "placeholder" : "i.e EECS"
      }

    ]

    this.courseInfoFields = [
      {
        "fieldText" : "Enter Course Name",
        "placeholder" : "i.e E-Commerce"
      },
      {
        "fieldText" : "Enter Course Code",
        "placeholder" : "i.e 4413"
      },
      {
        "fieldText" : "Enter Course Type",
        "placeholder" : "i.e Lecture"
      }

    ]

    this.additionalInfoFields = [
      {
        "fieldText" : "Enter Duration",
        "placeholder" : "i.e 3"
      },
      {
        "fieldText" : "Enter Instructor",
        "placeholder" : "i.e Marin L"
      },
      {
        "fieldText" : "Enter Location",
        "placeholder" : "i.e LSB 105"
      }

    ]
  }



  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


}
