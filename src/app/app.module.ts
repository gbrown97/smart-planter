import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddPlantDialogComponent } from './add-plant-dialog/add-plant-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlantDatabaseService } from '../services/plant-database.service'

@NgModule({
  declarations: [
    AppComponent,
    AddPlantDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule
    
  ],
  providers: [
    PlantDatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
