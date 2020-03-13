import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../../model/Course';
import { ColorMap } from '../../../../model/ColorMap';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { CrudCoursesService } from 'src/app/services/crud-courses.service';
import { CourseDialogComponent } from 'src/app/semester/scheduler/modals/course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {
  @Input() course: Course;
  @Input() showEdit: boolean;
  @Output() courseUpdated = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();

  cMap: ColorMap = new ColorMap();
  courseDialog: MatDialog;

  constructor(iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    dialog: MatDialog,
    private crudCoursesService: CrudCoursesService) {

    iconRegistry.addSvgIcon(
      'lecture-icon-white',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/people-outline-white.svg'));
    iconRegistry.addSvgIcon(
      'lab-icon-white',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/flask-white.svg'));
    iconRegistry.addSvgIcon(
      'edit-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/edit-24px.svg'));
    this.courseDialog = dialog;
  }

  iconType(): string {
    if (this.course.type === 'lecture') {
      return '../../../../../assets/people-outline-white.svg';
    } else {
      return '../../../../../assets/flask-white.svg';
    }
  }

  changeCourse() {
      this.course.display = !this.course.display;
  }

  ngOnInit() {}

  openCourseDialog(course: Course) {
    const dialogRef = this.courseDialog.open(CourseDialogComponent, {
      width: '800px',
      height: '800px',
      data: course,
      disableClose: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
       // If they hit the 'x', then it will be null and this will fail
      if (result.save) {
        this.crudCoursesService.updateCourse(result.course).subscribe(res => console.log(res));
        this.courseUpdated.emit(result.course);
      } else if (result.delete) {
        this.crudCoursesService.deleteCourse(result.course).subscribe(() => {});
        this.courseDeleted.emit(result.course);
      }
    });
  }

}
