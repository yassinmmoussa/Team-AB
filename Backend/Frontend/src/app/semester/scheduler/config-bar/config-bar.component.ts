import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ConstraintsDialogComponent} from '../modals/constraints-dialog/constraints-dialog.component';
import {OptimizationDialogComponent} from '../modals/optimization-dialog/optimization-dialog.component';
import {CsvDialogComponent} from '../modals/csv-dialog/csv-dialog.component';
import {TeamDialogComponent} from '../modals/team-dialog/team-dialog.component';
import {ConfigDialogComponent} from '../modals/config-dialog/config-dialog.component';
import {FormControl} from '@angular/forms';

export interface Program {
  value: string;
  viewValue: string;
}

export interface ProgramGroup {
  disabled?: boolean;
  year: string;
  program: Program[];
}

@Component({
  selector: 'app-config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.css']
})
export class ConfigBarComponent implements OnInit {


  configBtns = [];
  viewControl = new FormControl();
  programGroups: ProgramGroup[] = [
    {
      year:'Y1',
      program: [
        {value:'software-0', viewValue:'software'},
        {value: 'computer-1', viewValue: 'Computer'}
      ]
    },
    {
      year:'Y2',
      program: [
        {value:'civil-2', viewValue:'Civil'}
      ]
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    //Array of items to go into buttons
    this.configBtns = [
      {
        "iconUrl": "timeline",
        "iconText":"Constraints",
        "click": () => this.openConstraintsDialog()
      },
      {
        "iconUrl": "calendar_today",
        "iconText":"Run Optimization",
        "click": () => this.openOptimizationDialog()
      },
      {
        "iconUrl": "save",
        "iconText":"Export to CSV",
        "click": () => this.openCsvDialog()
      },
      {
        "iconUrl": "people_outline",
        "iconText":"Team",
        "click": () => this.openTeamDialog()
      },
      {
        "iconUrl": "settings",
        "iconText":"Configurations",
        "click": () => this.openConfigDialog()
      }
    ]
  }

// Creating the dialog

  openConstraintsDialog(){
    let dialogRef = this.dialog.open(ConstraintsDialogComponent,{
      width: '800px',
      height: '700px',
      data: 'this text is passed into the dialog',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}')
    })
  }

  openOptimizationDialog(){
    let dialogRef = this.dialog.open(OptimizationDialogComponent,{
      width: '800px',
      height: '700px',
      data: 'this text is passed into the dialog',
          disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}')
    })
  }

  openCsvDialog(){
    let dialogRef = this.dialog.open(CsvDialogComponent,{
      width: '800px',
      height: '700px',
      data: 'this text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}')
    })
  }

  openTeamDialog(){
    let dialogRef = this.dialog.open(TeamDialogComponent,{
      width: '800px',
      height: '700px',
      data: 'this text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}')
    })
  }

  openConfigDialog(){
    let dialogRef = this.dialog.open(ConfigDialogComponent,{
      width: '800px',
      height: '700px',
      data: 'this text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}')
    })
  }

}

// @Component({
//   selector: 'config-bar-constraints-modal',
//   templateUrl: 'config-bar-constraints-modal.html',
// })
// export class ConfigBarConstraintsModal {

  // constructor(
  //   public dialogRef: MatDialogRef<ConfigBarConstraintsModal>,
  //   @Inject(MAT_DIALOG_DATA) public data: Program) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
