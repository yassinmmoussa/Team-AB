import { Component, OnInit, Input, Output, EventEmitter, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { Course } from '../../../../../model/Course';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../../../modals/course-dialog/course-dialog.component';
import { CrudCoursesService } from '../../../../../services/crud-courses.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  // @Input() coursesDuring: Course[]; // Add in later for better display algorithm
  @Input() blockNo: number;
  @Input() set courses(cList: Course[]) {
    this.coursesStarting = cList;
  }
  @Output() courseStateChanged = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();

  courseDialog: MatDialog;
  coursesStarting: Course[] = [];

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              dialog: MatDialog,
              private crudCoursesService: CrudCoursesService) {
    iconRegistry.addSvgIcon(
        'lecture-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/people-outline.svg'));
    iconRegistry.addSvgIcon(
      'lab-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/flask.svg'));
    this.courseDialog = dialog;
  }

  calcBlockWidth(): number {
    return 100 / this.coursesStarting.length;
  }

  getCourseIconName(c: Course): string {
    if (c.type === 'lecture') {
      return 'lecture-icon';
    } else {
      return 'lab-icon';
    }
  }

  openCourseDialog(c: Course) {
    const dialogRef = this.courseDialog.open(CourseDialogComponent, {
      width: '800px',
      height: '800px',
      data: c,
      disableClose: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
       // If they hit the 'x', then it will be null and this will fail
      if (result.save) {
        this.crudCoursesService.updateCourse(result.course).subscribe(res => console.log(res));
        this.courseStateChanged.emit(result.course);
      } else if (result.delete) {
        this.crudCoursesService.deleteCourse(result.course).subscribe(() => {});
        this.courseDeleted.emit(result.course);
      }
    });
  }

  ngOnInit() {
  }

}
