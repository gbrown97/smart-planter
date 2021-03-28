import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlantDialogComponent } from '../app/add-plant-dialog/add-plant-dialog.component'

export interface PlantDefinition {
  name: string,
  type: string,
  minTemp: number,
  maxTemp: number,
  sunlightLevel: string,
  minMoisture: number,
  maxMoisture: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-planter';

  plantDef: PlantDefinition = {
    name: "Plant",
    type: "Generic Type",
    minTemp: 70,
    maxTemp: 80,
    sunlightLevel: "Medium",
    minMoisture: 1,
    maxMoisture: 10
  }

  tempResult: PlantDefinition = {
    name: "Plant",
    type: "Generic Type",
    minTemp: 70,
    maxTemp: 80,
    sunlightLevel: "Medium",
    minMoisture: 1,
    maxMoisture: 10
  }

  plantList: Array<PlantDefinition> = [];

  constructor(public dialog: MatDialog) {}

  addPlant() {
    console.log(this.plantList);
    const dialogRef = this.dialog.open(AddPlantDialogComponent, {
      width: '250px',
      data: this.plantDef
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result" + result);
      if(result != '' || result != undefined){
        let cloneData = JSON.parse(JSON.stringify(result));
        this.plantList.push(cloneData);
      }
      console.log(this.plantList);
    });
  }
}
