import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductFormComponent } from './product.form/product.form.component';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ProductFormComponent]
})
export class ProductFormModule {}
