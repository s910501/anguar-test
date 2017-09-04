import { CountdownComponent } from './countdown/countdown.component';
import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Hero } from './hero'

import { MissionService } from './mission.service';

import { AdService }         from './ad-banner/ad.service';
import { AdItem }            from './ad-banner/ad-item';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MissionService]
})
export class AppComponent implements AfterViewInit {
  submitMessage='';
  clickMessage(){};
  setUppercaseName(content){};
  isUnchanged='';
  onSubmit(submit){};
  ads: AdItem[];
  currentHero={
    emotion:'happy'
  }
  //title = 'tour of Heroes';
  //myHero = 'Winstorm';
  title = 'Tour of Heroes';
  //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  heroes = [
    new Hero(1,'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
    new Hero(21, '')
  ]
  master = 'Master   ';
  //master = '   ';
  trackByHeroes(index:number,hero:Hero):number{return hero.id}
  myHero = this.heroes[0];
  //constructor(){
    //this.title = 'Tour of Heroes';
    //this.myHero ='shenzm';
  //}
  getVal(){
    return 1;
  }
  //classes1="classes1";
  classes1={
    "classes1":false,
    "classes2":true,
  }
  isSpecial=true;

  callPhone(phone:number){
    alert(phone);
  }


  // 输出
  major = 1;
  minor = 23;
  newMinor() {
    this.minor++;
  }
  newMajor() {
    this.major++;
    this.minor = 0;
  }

  // 输入
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  onVoted1(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  @ViewChild(CountdownComponent)
  private timerComponent: CountdownComponent;
  seconds() { return 0; }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }


  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;
 
  constructor(private missionService: MissionService,private adService: AdService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }
 
  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
  ngOnInit() {
    this.ads = this.adService.getAds();
  }


  color = 'yellow';

}
