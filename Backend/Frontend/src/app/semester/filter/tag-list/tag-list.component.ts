import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DATA } from './tag-data';

export interface TagNode {
  name: string;
  tags?: TagNode[];
  selected?: boolean;
  leaf?: boolean;
  children?: TagNode[];
  color?: string;
}

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})

export class TagListComponent implements OnInit {
  @Output() updateGlobalFilters = new EventEmitter();

  treeControl = new NestedTreeControl<TagNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TagNode>();
  filters = [];

  constructor() {
    this.dataSource.data = DATA;
  }

  hasChild = (_: number, node: TagNode) => !!node.children && node.children.length > 0;

  ngOnInit() {}

  updateFilters() {
    this.filters = [];
    this.dataSource.data.forEach(node => {
      const dept = node.name;
      node.children.forEach(child => {
        child.tags.forEach(tag => {
          const filterName = dept + ' ' + tag.name;
          const nodeDataArray = tag.name.split(' ');
          const nodeData = {
            filterName,
            dept,
            courseYear: nodeDataArray[0].charAt(1),
            courseType: nodeDataArray[1]
          };
          if (tag.selected) {
            this.filters.push(nodeData);
          }
        });
      });
    });
    this.updateGlobalFilters.emit(this.filters);
  }
}
