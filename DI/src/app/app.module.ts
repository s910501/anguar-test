import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import {ProductService} from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import {LoggerService} from './shared/logger.service';
import {AnotherproductService} from './shared/anotherproduct.service';

export function productFactory (logger: LoggerService, appConfig) {
  const dev = Math.random() > 0.5;
  console.log(appConfig.isDev);
  if (appConfig.isDev) {
    return new ProductService(logger);
  }else {
    return new AnotherproductService(logger);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  // 用于实例化
  providers: [{
    provide: ProductService,
    useFactory: productFactory,
    deps: [LoggerService, 'APP_CONFIG']},
    LoggerService,
    // {
    //   provide: 'IS_DEV_ENV', useValue: false
    // },
    {
      provide: 'APP_CONFIG', useValue: {isDev: false}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


