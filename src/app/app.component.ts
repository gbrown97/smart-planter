import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlantDialogComponent } from '../app/add-plant-dialog/add-plant-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-planter';

  constructor(public dialog: MatDialog) {}

  addPlant() {
    const dialogRef = this.dialog.open(AddPlantDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
