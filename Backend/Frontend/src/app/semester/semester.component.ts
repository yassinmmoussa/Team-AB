import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  data;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    console.log('Got courses');
    this.dataService.getCourses().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
