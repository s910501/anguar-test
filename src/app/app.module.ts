import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

import { HeroJobAdComponent }   from './ad-banner/hero-job-ad.component';
import { HeroProfileComponent } from './ad-banner/hero-profile.component';
import { AdDirective }          from './ad-banner/ad.directive';
import { AdService }            from './ad-banner/ad.service';

import { HighlightDirective } from './highlight.directive';
import { HeroSwitchComponent } from './hero-switch/hero-switch.component';

import { UnlessDirective }            from './unless.directive';
import { FlyingHeroesPipe,FlyingHeroesImpurePipe } from './flying-heroes.pipe'
import { FetchJsonPipe } from './fetch-json.pipe';
import { HeroListComponent } from './hero-list/hero-list.component'

@NgModule({
  declarations: [
    
    AppComponent,
    HeroDetailComponent,
    VersionChildComponent,
    VoterComponent,
    CountdownComponent,
    AstronautComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    HighlightDirective,
    HeroSwitchComponent,
    UnlessDirective,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
    HeroListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AdService],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
