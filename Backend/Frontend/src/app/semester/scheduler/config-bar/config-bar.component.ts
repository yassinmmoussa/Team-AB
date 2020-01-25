import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.css']
})
export class ConfigBarComponent implements OnInit {


  configBtns = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    //Array of items to go into buttons
    this.configBtns = [
      {
        "iconUrl": "timeline",
        "iconText":"Constraints"
      },
      {
        "iconUrl": "calendar_today",
        "iconText":"Run Optimization"
      },
      {
        "iconUrl": "save",
        "iconText":"Export to CSV"
      },
      {
        "iconUrl": "people_outline",
        "iconText":"Team"
      },
      {
        "iconUrl": "settings",
        "iconText":"Configurations"
      }
    ]
  }

// Creating the dialog
  openDialog(){
    let dialogRef = this.dialog.open(MyDialogComponent,{
      width: '800px',
      height: '700px',
      data: 'this text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}')
    })
  }


}

@Component({
  selector: 'config-bar-constraints-modal',
  templateUrl: 'config-bar-constraints-modal.html',
})
export class ConfigBarConstraintsModal {

  constructor(
    public dialogRef: MatDialogRef<ConfigBarConstraintsModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
