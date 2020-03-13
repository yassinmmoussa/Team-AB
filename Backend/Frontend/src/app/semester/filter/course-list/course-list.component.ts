import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../../../model/Course';
import { AddNewCourseModalComponent } from '../../modals/add-new-course-modal/add-new-course-modal.component';
import { CrudCoursesService } from '../../../services/crud-courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[];
  @Input() showAdd: boolean;

  @Output() courseStateChanged = new EventEmitter<Course>();
  @Output() courseUpdated = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() courseAdded = new EventEmitter<Course>();

  constructor(public dialog: MatDialog, private crudCoursesService: CrudCoursesService) {}

  ngOnInit() {}

  openAddCourseDialog(){
    const dialogRef = this.dialog.open(AddNewCourseModalComponent, {
      width: '800px',
      height: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log('Dialog closed', result);
     this.crudCoursesService.addNewCourse(result).subscribe(res => console.log(res));
     this.courseAdded.emit(result);
    });
  }
}
