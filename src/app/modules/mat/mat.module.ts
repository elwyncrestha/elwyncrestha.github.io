import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const MAT_MODULES = [MatTabsModule, MatIconModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MAT_MODULES],
  exports: [...MAT_MODULES],
})
export class MatModule {}
