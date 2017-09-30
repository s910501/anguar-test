import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

// 可以注入其它服务（LoggerService）
@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log("getproduct方法被调用");
    return new Product(0, "Iphone7", 5899, 'new iphone')
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string,
  ){}
}
