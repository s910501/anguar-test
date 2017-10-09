import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex: number = 1;
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  name: string;
  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }
  // 1.输入属性初始化、输入属性变更时调用
  // 2.不可变对象变化时调用，可变对象变化时不调用（输入）
  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIt('ngOnChanges:' + name);
  }

  // 初始化
  ngOnInit() {
    this.logIt('ngOnInit');
  }

  // 变更检查机制调用
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }

  constructor() {
    this.logIt('constructor：' + name);
  }



}
