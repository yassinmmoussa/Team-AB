import { Component, OnInit, Input } from '@angular/core';
import { dayConfig } from './dayConfig';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day: {name: string};

  numBlocks = dayConfig.numPeriodsPerDay;

  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor() { }

  ngOnInit() {
  }

}
