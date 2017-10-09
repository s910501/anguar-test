import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-destory',
  templateUrl: './destory.component.html',
  styleUrls: ['./destory.component.css']
})
export class DestoryComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("Destory组件被销毁");
  }

  constructor() { }

  ngOnInit() {
  }

}
