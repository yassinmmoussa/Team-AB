import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() tag;

  @Output() tagChanged = new EventEmitter();

  test() {
    this.tag.selected = !this.tag.selected;
    this.tagChanged.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
