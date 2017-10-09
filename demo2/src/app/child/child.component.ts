import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  greeting: string;

  @Input()
  user: {name: string}

  message: string = '不是输入属性';

  oldUsername: string;

  changeDetected: boolean = false;

  noChangeCount: number;

  constructor() { }

  ngOnInit() {}

  // 每次事件都会触发，使用要小心
  ngDoCheck(): void {
    if (this.user.name != this.oldUsername) {
      this.changeDetected = true;
      console.log('DoCheck change:' + this.oldUsername + ' to:' + this.user.name);
      this.oldUsername = this.user.name;
    }
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount = this.noChangeCount + 1;
      console.log('DoCheck: user.name没有变化时ngDoCheck方法已经被调用' + this.noChangeCount);
    }
    this.changeDetected = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:');
    console.log(JSON.stringify(changes, null, 2));
  }
}
