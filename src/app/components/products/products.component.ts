import { Component, OnInit } from '@angular/core';
import Product from "../../models/product.model";
import { StoreService } from "../../services/store.service";
import { ProductsService } from "../../services/products.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private storeService: StoreService, private productService: ProductsService) {

    this.myShoppingCart = this.storeService.getShoppingCart();

  }

  myShoppingCart: Product[] = [];
  total: number = 0;
  public products: Product[] = [];
  today = new Date();
  date = new Date(2022, 1, 21);

  ngOnInit(): void {

    this.productService.getAllProducts()
    .subscribe(data => {

      this.products = data;

    })

  }

  onAddToShoppingCart(product: Product){

    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();

  }

}
