import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { AddPlantDialogComponent } from '../app/add-plant-dialog/add-plant-dialog.component'
import { PlantDatabaseService } from '../services/plant-database.service'

export interface PlantDefinition {
  name: string,
  type: string,
  minTemperature: number,
  maxTemperature: number,
  currentTemperature: number,
  sunlightLevel: string,
  currentSunlightLevel: number,
  minMoisture: number,
  maxMoisture: number,
  currentMoisture: number,
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
    minTemperature: 70,
    maxTemperature: 80,
    currentTemperature: 0,
    sunlightLevel: "Medium",
    currentSunlightLevel: 0,
    minMoisture: 1,
    maxMoisture: 10,
    currentMoisture: 0
  }

  plantList: Array<PlantDefinition> = [];

  constructor(
    public dialog: MatDialog,
    public dbService: PlantDatabaseService
  ) {}

  ngOnInit() {
    this.dbService.getAll().subscribe(
      rtv => {
        this.plantList = rtv;
      }
    )
  }

  addPlant() {
    const dialogRef = this.dialog.open(AddPlantDialogComponent, {
      width: '250px',
      data: this.plantDef
    });

    dialogRef.afterClosed().subscribe(result => {
      try {
        if(result.name == null || result != undefined){
          let cloneData = JSON.parse(JSON.stringify(result));
          this.plantList.push(cloneData);
          this.dbService.create(cloneData).subscribe(
            rtv => {
              console.log("Sent plant: ", cloneData);
            }
          );
        }
      }
      catch {}
    });
  }

  removePlant(plant:PlantDefinition) {
    if(confirm("Are you sure you want to delete "+plant.name+"?")) {
      this.plantList.splice(this.plantList.indexOf(plant), 1);
    }
  }
}
