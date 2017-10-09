import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit,
  ViewChild
} from '@angular/core';
import {ChildviewComponent} from "./childview/childview.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {
  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕');
  }

  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
  }
  message: string;
  divContent: string = '<div>6666</div>';
  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
    // this.message = 'hello';
    // 可以用Settimetout 规避这个报错
  }

  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
  }

  @ViewChild('childview1')
  childview1: ChildviewComponent;

  title = 'Tom';
  greeting: string = 'Hello';
  user:{name: string} = {name:'Tom'};
  ngOnInit(): void {
    this.childview1.greeting("Tom");
  }
}
