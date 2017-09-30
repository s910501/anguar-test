import {Component, Input, OnInit} from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order1',
  templateUrl: './order1.component.html',
  styleUrls: ['./order1.component.css']
})
export class Order1Component implements OnInit {

  @Input()
  priceQuote: PriceQuote;

  constructor() { }

  ngOnInit() {
  }

}
