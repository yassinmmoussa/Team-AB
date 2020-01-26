import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() updateGlobalFilters = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateFilters(filters) {
    this.updateGlobalFilters.emit(filters);
  }

}
