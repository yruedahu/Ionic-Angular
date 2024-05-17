import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorPagePage } from './calculator-page.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorPagePageRoutingModule {}
