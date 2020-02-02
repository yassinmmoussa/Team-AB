import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Course } from 'src/app/model/Course';
import { Curricula } from 'src/app/model/Curricula';

@Component({
  selector: 'app-optimization-dialog',
  templateUrl: './optimization-dialog.component.html',
  styleUrls: ['./optimization-dialog.component.css']
})
export class OptimizationDialogComponent implements OnInit {

  courses: Course[];
  curricula: Curricula[];

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<CourseDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {co: Course[], cu: Curricula[]}
  ) {
    this.courses = data.co;
    this.curricula = data.cu;
  }

  ngOnInit() {
  }

  runOptimization() {
    console.log('RUNNING OPTIMIZATION...');
    this.dataService.runOptimizer(this.courses, this.curricula).subscribe(data => {
      console.log('Result of runOptimizer');
      console.log(data);
    });
  }
}
