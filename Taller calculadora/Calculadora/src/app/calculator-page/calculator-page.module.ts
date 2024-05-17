import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPagePageRoutingModule } from './calculator-page-routing.module';

import { CalculatorPagePage } from './calculator-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorPagePageRoutingModule
  ],
  declarations: [CalculatorPagePage]
})
export class CalculatorPagePageModule {}
