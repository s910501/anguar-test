import { CountdownComponent } from './countdown/countdown.component';
import { Component,Input } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Hero } from './hero'
import { HEROES }                 from './heroes';

import { MissionService } from './mission.service';

import { AdService }         from './ad-banner/ad.service';
import { AdItem }            from './ad-banner/ad-item';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

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
  //解决重复数据遍历的错误
  trackByHeroes(index:number,hero:Hero):number{return hero.id}
  myHero = this.heroes[0];
  hero = new Hero(1,'Windstorm');
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
      this.reset();
      this.resend();
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
  birthday = new Date(1988, 3, 15);
  toggle = true; // start with true == shortDate
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }


  heroes2: any[] = [];
  canFly = true;
  mutate = true;

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.heroes2.push(hero);
      } else {
        // Pipe updates display because heroes array is a new object
        this.heroes2 = this.heroes2.concat(hero);
      }
    //this.heroes2.push(hero);
  }

  reset() { this.heroes2 = HEROES.slice();}

  message$: Observable<string>;
  
   private messages = [
     'You are my hero!',
     'You are the best hero!',
     'Will you be my hero?'
   ];
  
   resend() {
     this.message$ = Observable.interval(500)
       .map(i => this.messages[i])
       .take(this.messages.length);
   }

}
