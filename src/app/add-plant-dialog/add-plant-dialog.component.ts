import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
  selector: 'app-add-plant-dialog',
  templateUrl: './add-plant-dialog.component.html',
  styleUrls: ['./add-plant-dialog.component.css']
})
export class AddPlantDialogComponent implements OnInit {

  sunLevelSelected = "";
  constructor(
    public dialogRef: MatDialogRef<AddPlantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlantDefinition) {}

  ngOnInit(): void {
    this.sunLevelSelected = this.data.sunlightLevel;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}