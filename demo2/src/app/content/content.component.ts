import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  message: string = 'hello';
  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更检测完毕');
    // 可以改变视图内容
    this.message = 'hello world';
  }

  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕');
  }

  constructor() { }

  ngOnInit() {
  }

}
