import {Component, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {AnotherproductService} from "../shared/anotherproduct.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // 覆盖了主组件的Token
  // providers: [{provide: ProductService, useClass: AnotherproductService}]
})
export class Product2Component implements OnInit {

  product: Product;
  private productService: ProductService;
  // constructor(private productService: ProductService) { }
  constructor(private injector: Injector) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
