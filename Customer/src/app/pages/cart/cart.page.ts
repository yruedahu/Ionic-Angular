import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/request.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: Products[] = [];

  constructor(private dataService: DataService, private alertController: AlertController) {}

  ngOnInit() {
    this.cartItems = this.dataService.getCartItems();
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
