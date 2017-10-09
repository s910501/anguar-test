import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";
import { ChildviewComponent } from './childview/childview.component';
import { ContentComponent } from './content/content.component';
import { DestoryComponent } from './destory/destory.component';
import {RouterModule, Routes} from "@angular/router";

var routeConfig: Routes = [
  {path: '', component: ChildviewComponent},
  {path: 'destory', component: DestoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ChildviewComponent,
    ContentComponent,
    DestoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
