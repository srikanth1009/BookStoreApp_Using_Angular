import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

const MaterialComponent = [ 
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatTooltipModule,
  MatButtonModule,
  MatSelectModule,
  MatExpansionModule,
  MatRadioModule,
  MatBadgeModule,
  MatDialogModule,
  MatCardModule,
  MatTabsModule
];

@NgModule({
  imports: [
    MaterialComponent
  ],
  exports: [MaterialComponent]
})
export class MaterialModule { }