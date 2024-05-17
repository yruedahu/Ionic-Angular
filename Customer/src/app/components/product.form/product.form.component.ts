import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Products, Rating } from 'src/app/interfaces/product';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/request.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product.form.component.html',
  styleUrls: ['./product.form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() products: Products[] = [];
  @Input() isMarketPage: boolean = false;
  @Input() isCartPage: boolean = false;
  id!: number;
  title!: string;
  price!: number;
  description!: string;
  category!: string;
  image!: string;
  rating!: Rating;

  constructor(private dataService: DataService, private alertController: AlertController) { }

  ngOnInit() {
    this.rating = {
      rate: 0,
      count: 0
    };
  }

  addProduct() {
    const newProduct: Products = {
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image,
      rating: this.rating
    };
    this.products.push(newProduct);
    this.presentAlert('Producto añadido a la lista');
  }

  addProductToCart(product: Products) {
    this.dataService.addToCart(product)
    this.presentAlert('Producto agregado al carrito');
  }
  
  removeFromCart(product: Products) {
    this.dataService.removeFromCart(product);
    this.presentAlert('Producto removido del carrito');
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Notificación',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
