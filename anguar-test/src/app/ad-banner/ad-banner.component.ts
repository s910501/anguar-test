import { AdDirective } from './ad.directive';
import { Component, Input , OnInit, AfterViewInit, OnDestroy,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';


@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit,AfterViewInit, OnDestroy {

  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;
  constructor( private componentFactoryResolver: ComponentFactoryResolver ) {}
  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  ngOnInit() {
  }

  loadComponent() {
    // 从数组中选取一个adItem
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    // 来为每个具体的组件解析出一个ComponentFactory
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // 要把viewContainerRef指向这个组件的现有实例
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    // 把这个组件添加到模板中
    let componentRef = viewContainerRef.createComponent(componentFactory);

    // 设置它的属性或调用它的方法
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
