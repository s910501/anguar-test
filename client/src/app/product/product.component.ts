import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // dateSource: Observable<any>;
  // products: Array<any> = []
  products: Observable<any>;

  constructor(private http: Http) {
    let myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');
    // this.dateSource = this.http.get('/api/products').map((res) => res.json());
    this.products = this.http.get('/api/products',{headers: myHeaders}).map((res) => res.json());
  }

  ngOnInit() {
    // 这个时候才发送请求
/*    this.dateSource.subscribe(
      (data) => this.products = data
    );*/
  }

}
