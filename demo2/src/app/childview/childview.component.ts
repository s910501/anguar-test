import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-childview',
  templateUrl: './childview.component.html',
  styleUrls: ['./childview.component.css']
})
export class ChildviewComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnDestroy(): void {
    console.log("Childview组件被销毁");
  }

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log('hello:' + name);
  }

  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕');
  }

  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }
}
