import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/request.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  newProducts: Products[] = [];
  isMarketPage: boolean = true
  isCartPage: boolean = false

  constructor(private dataService: DataService, private alertController: AlertController) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe((products: Products[]) => {
      this.newProducts = products;
    });
  }

  addToCart(product: Products) {
    this.dataService.addToCart(product);
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
