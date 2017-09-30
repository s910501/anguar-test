import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {


  doOnClick(event: any) {
    console.log(event);
  }
  doOnInput(event: any) {
    // dom 属性
    console.log(event.target.value);
    // html 属性（不改变）
    console.log(event.target.getAttribute('value'));
  }

  imgUrl: string = 'http://placehold.it/400x220';
  size: number = 2;
  divClass: string;
  isBig: boolean = false;
  divNgClass: any = {
    a: true,
    b: true,
    c: true,
  };

  isDev: boolean = true;

  divStyle: any = {
    color: 'yellow',
    background: 'black'
  }

  name: string;
  date:Date = new Date();
  pi: number = 3.1415946;
  doOnInput1(event: any) {
    this.name = event.target.value;
  }
  constructor() {
    setTimeout(() => {
      this.divClass = 'a b c';
      this.isBig = true;
    },5000);
  }
  ngOnInit() {
  }

}
