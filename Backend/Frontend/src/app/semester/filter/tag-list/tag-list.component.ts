// import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
// import { NestedTreeControl } from '@angular/cdk/tree';
// import { MatTreeNestedDataSource } from '@angular/material/tree';
// import {SelectionModel} from '@angular/cdk/collections';
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
// import {BehaviorSubject} from 'rxjs';

// /**
//  * Node for to-do item
//  */
// export class TodoItemNode {
//   children: TodoItemNode[];
//   item: string;
// }

// /** Flat to-do item node with expandable and level information */
// export class TodoItemFlatNode {
//   item: string;
//   level: number;
//   expandable: boolean;
// }

// /**
//  * The Json object for to-do list data.
//  */
// const lecturesAndLabs = [
//   'Y1 Lecture',
//   'Y1 Lab',
//   'Y2 Lecture',
//   'Y2 Lab',
//   'Y3 Lecture',
//   'Y3 Lab',
//   'Y4 Lecture',
//   'Y4 Lab'
// ]
// const TREE_DATA = {
//   EECS: lecturesAndLabs,
//   MECH: lecturesAndLabs,
//   CIVL: lecturesAndLabs,
//   ESSE: lecturesAndLabs,
//   ENG: lecturesAndLabs
// };

// /**
//  * Checklist database, it can build a tree structured Json object.
//  * Each node in Json object represents a to-do item or a category.
//  * If a node is a category, it has children items and new items can be added under the category.
//  */
// @Injectable()
// export class ChecklistDatabase {
//   dataChange = new BehaviorSubject<TodoItemNode[]>([]);

//   get data(): TodoItemNode[] { return this.dataChange.value; }

//   constructor() {
//     this.initialize();
//   }

//   initialize() {
//     // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
//     //     file node as children.
//     const data = this.buildFileTree(TREE_DATA, 0);

//     // Notify the change.
//     this.dataChange.next(data);
//   }

//   /**
//    * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
//    * The return value is the list of `TodoItemNode`.
//    */
//   buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
//     return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
//       const value = obj[key];
//       const node = new TodoItemNode();
//       node.item = key;

//       if (value != null) {
//         if (typeof value === 'object') {
//           node.children = this.buildFileTree(value, level + 1);
//         } else {
//           node.item = value;
//         }
//       }

//       return accumulator.concat(node);
//     }, []);
//   }

//   /** Add an item to to-do list */
//   insertItem(parent: TodoItemNode, name: string) {
//     if (parent.children) {
//       parent.children.push({item: name} as TodoItemNode);
//       this.dataChange.next(this.data);
//     }
//   }

//   updateItem(node: TodoItemNode, name: string) {
//     node.item = name;
//     this.dataChange.next(this.data);
//   }
// }

// @Component({
//   selector: 'app-tag-list',
//   templateUrl: './tag-list.component.html',
//   styleUrls: ['./tag-list.component.css'],
//   providers: [ChecklistDatabase]
// })

// export class TagListComponent implements OnInit {
//   @Output() updateGlobalFilters = new EventEmitter();

//   filters = [];

//   /** Map from flat node to nested node. This helps us finding the nested node to be modified */
//   flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

//   /** Map from nested node to flattened node. This helps us to keep the same object for selection */
//   nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

//   /** A selected parent node to be inserted */
//   selectedParent: TodoItemFlatNode | null = null;

//   /** The new item's name */
//   newItemName = '';

//   treeControl: FlatTreeControl<TodoItemFlatNode>;

//   treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

//   dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

//   /** The selection for checklist */
//   checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

//   constructor(private _database: ChecklistDatabase) {
//     this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
//       this.isExpandable, this.getChildren);
//     this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
//     this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//     _database.dataChange.subscribe(data => {
//       this.dataSource.data = data;
//     });
//   }

//   ngOnInit() {

//   }

//   getLevel = (node: TodoItemFlatNode) => node.level;

//   isExpandable = (node: TodoItemFlatNode) => node.expandable;

//   getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

//   hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

//   hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

//   /**
//    * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
//    */
//   transformer = (node: TodoItemNode, level: number) => {
//     const existingNode = this.nestedNodeMap.get(node);
//     const flatNode = existingNode && existingNode.item === node.item
//         ? existingNode
//         : new TodoItemFlatNode();
//     flatNode.item = node.item;
//     flatNode.level = level;
//     flatNode.expandable = !!node.children;
//     this.flatNodeMap.set(flatNode, node);
//     this.nestedNodeMap.set(node, flatNode);
//     return flatNode;
//   }

//   /** Whether all the descendants of the node are selected. */
//   descendantsAllSelected(node: TodoItemFlatNode): boolean {
//     const descendants = this.treeControl.getDescendants(node);
//     const descAllSelected = descendants.every(child =>
//       this.checklistSelection.isSelected(child)
//     );
//     return descAllSelected;
//   }

//   /** Whether part of the descendants are selected */
//   descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
//     const descendants = this.treeControl.getDescendants(node);
//     const result = descendants.some(child => this.checklistSelection.isSelected(child));
//     return result && !this.descendantsAllSelected(node);
//   }

//   /** Toggle the to-do item selection. Select/deselect all the descendants node */
//   todoItemSelectionToggle(node: TodoItemFlatNode): void {
//     this.checklistSelection.toggle(node);
//     const descendants = this.treeControl.getDescendants(node);
//     this.checklistSelection.isSelected(node)
//       ? this.checklistSelection.select(...descendants)
//       : this.checklistSelection.deselect(...descendants);

//     this.updateFilters(descendants);
//     // Force update for the parent
//     descendants.every(child =>
//       this.checklistSelection.isSelected(child)
//     );
//     this.checkAllParentsSelection(node);
//   }

//   /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
//   todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
//     this.checklistSelection.toggle(node);
//     this.checkAllParentsSelection(node);
//     this.updateFilters([node]);
//   }

//   updateFilters(nodes) {
//     const parent: TodoItemFlatNode | null = this.getParentNode(nodes[0]);

//     if (parent != null) {
//       nodes.forEach(node => {
//         const filterName = parent.item + ' ' + node.item;
//         const nodeDataArray = node.item.split(' ');
//         const nodeData = {
//           filterName,
//           dept: parent.item,
//           courseYear: nodeDataArray[0].charAt(1),
//           courseType: nodeDataArray[1]
//         };
//         if (this.checklistSelection.isSelected(node)) {
//           if (!this.filters.some(filter => filter.filterName === filterName)) {
//             this.filters.push(nodeData);
//           }
//         } else {
//           this.filters = this.filters.filter(filter => filter.filterName !== filterName);
//         }
//       });

//       this.updateGlobalFilters.emit(this.filters);
//     }
//   }

//   /* Checks all the parents when a leaf node is selected/unselected */
//   checkAllParentsSelection(node: TodoItemFlatNode): void {
//     let parent: TodoItemFlatNode | null = this.getParentNode(node);
//     while (parent) {
//       this.checkRootNodeSelection(parent);
//       parent = this.getParentNode(parent);
//     }
//   }

//   /** Check root node checked state and change it accordingly */
//   checkRootNodeSelection(node: TodoItemFlatNode): void {
//     const nodeSelected = this.checklistSelection.isSelected(node);
//     const descendants = this.treeControl.getDescendants(node);
//     const descAllSelected = descendants.every(child =>
//       this.checklistSelection.isSelected(child)
//     );
//     if (nodeSelected && !descAllSelected) {
//       this.checklistSelection.deselect(node);
//     } else if (!nodeSelected && descAllSelected) {
//       this.checklistSelection.select(node);
//     }
//   }

//   /* Get the parent node of a node */
//   getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
//     const currentLevel = this.getLevel(node);

//     if (currentLevel < 1) {
//       return null;
//     }

//     const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

//     for (let i = startIndex; i >= 0; i--) {
//       const currentNode = this.treeControl.dataNodes[i];

//       if (this.getLevel(currentNode) < currentLevel) {
//         return currentNode;
//       }
//     }
//     return null;
//   }

//   /** Select the category so we can insert the new item. */
//   addNewItem(node: TodoItemFlatNode) {
//     const parentNode = this.flatNodeMap.get(node);
//     this._database.insertItem(parentNode!, '');
//     this.treeControl.expand(node);
//   }

//   /** Save the node to database */
//   saveNode(node: TodoItemFlatNode, itemValue: string) {
//     const nestedNode = this.flatNodeMap.get(node);
//     this._database.updateItem(nestedNode!, itemValue);
//   }
// }


import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DATA } from "./tag-data";

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
          }
          if (tag.selected) {
            this.filters.push(nodeData);
          }
        });
      });
    });
    this.updateGlobalFilters.emit(this.filters);
  }
}