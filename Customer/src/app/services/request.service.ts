import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from '../interfaces/product';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private apiUrl = environment.URL
    private marketProducts: Products[] = []
    private cartItems: Products[] = []
    constructor(private http: HttpClient) {
        this.getData().subscribe((products: Products[]) => {
            this.marketProducts = products
        })
    }


    getData(): Observable<Products[]> {
        return this.http.get<Products[]>(this.apiUrl)
    }

    addToCart(product: Products): void {
        this.cartItems.push(product)
    }

    removeFromCart(product: Products): void {
        const index = this.cartItems.findIndex(item => item.id === product.id);
        if (index !== -1) {
            this.cartItems.splice(index, 1)
        }
    }

    getCartItems(): Products[] {
        return this.cartItems
    }

    getMarketItems(): Products[] {
        return this.marketProducts
    }
}
