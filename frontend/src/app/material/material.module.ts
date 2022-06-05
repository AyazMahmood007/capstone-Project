import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field/public-api';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  exports:[
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule
  ]
  
})
export class MaterialModule { }
