import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    VersionChildComponent,
    VoterComponent,
    CountdownComponent,
    AstronautComponent,
    AdBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
