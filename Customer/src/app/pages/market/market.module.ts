import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketPageRoutingModule } from './market-routing.module';

import { MarketPage } from './market.page';
import { ProductFormModule } from 'src/app/components/product.form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductFormModule,
    MarketPageRoutingModule
  ],
  declarations: [MarketPage]
})
export class MarketPageModule {}
