import { Injectable } from '@angular/core';
import {Product, ProductService} from "./product.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherproductService implements ProductService {
  getProduct(): Product {
    return new Product(0, "Iphone8", 5899, 'new iphone8');
  }

  constructor(public logger: LoggerService) { }

}
