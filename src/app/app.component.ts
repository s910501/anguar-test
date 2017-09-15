import { CountdownComponent } from './countdown/countdown.component';
import { Component,Input,OnInit,OnChanges } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Hero } from './hero'
import { HEROES }                 from './heroes';
import { Heroes } from './hero-list/hero.service';
import { TeacherService } from './teacher-list/teacher.service';
import { MissionService } from './mission.service';

import { AdService }         from './ad-banner/ad.service';
import { AdItem }            from './ad-banner/ad-item';
import { student }                 from './student';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';
import { states,Address,Teacher,teachers } from './data-model';

import { QuestionService } from './question-base/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MissionService,Heroes,QuestionService]
})
export class AppComponent implements AfterViewInit,OnInit, OnChanges {
  teachers: Observable<Teacher[]>;
  submitMessage='';
  //clickMessage(){};
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
  questions: any[];
  constructor(private missionService: MissionService,private adService: AdService,private heroes_animate: Heroes,
    private fb: FormBuilder,private fb2: FormBuilder,private teacherService: TeacherService,service: QuestionService) {
      this.createForm();
      this.createForm2();
      this.questions = service.getQuestions();
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
  clickMessage = '';
   
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  values = '';
  //onKey(event: any) { // without type info
  //  //this.values += event.target.value + ' | ';
  //  this.values += event.key + ' | ';
  //}
  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  onKey2(value: string) {
    this.values += value + ' | ';
  }
  onEnter(value: string) { this.values  = value; }
  update(value: string) { this.values = value; }

  mystudent = new student(42,'SkyDog','Fetch any object at any distance','Leslie Rollover');

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new student(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  studentSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  newStudent() {
    this.model = new student(42, '', '');
  }
  heroForm2: FormGroup;
  
  ngOnInit() {
    this.ads = this.adService.getAds();
    this.getTeachers();    
    this.heroForm2 = new FormGroup({
      'name': new FormControl(this.model.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.model.alterEgo),
      'power': new FormControl(this.model.power, Validators.required)
    });
  }
  get name2() { return this.heroForm2.get('name'); }
  get power() { return this.heroForm2.get('power'); }

  // 响应式表单
  reactive_name = new FormControl();
  reactive_heroForm = new FormGroup ({
    name: new FormControl()
  });

  // FormBuilder.group是一个用来创建FormGroup的工厂方法
  reactive_bulder_heroForm: FormGroup;
  states = states;
  createForm() {
    this.reactive_bulder_heroForm = this.fb.group({
      //name: '初始值', // <--- the FormControl called "name"
      name: ['初始值',Validators.required],
      address: this.fb.group({ // <-- the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      //street: '',
      //city: '',
      //state: '',
      //zip: '',
      power: '',
      sidekick: []
    });
  }

  //
   teacher: Teacher[] = [
    {
      id: 1,
      name: 'Whirlwind',
      addresses: [
        {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
        {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
      ]
    }
  ]
  reactive_bulder_heroForm2: FormGroup;
  states2 = states;
  //teachers = teachers;
  
  selectedTeacher:Teacher;
  createForm2() {
    this.reactive_bulder_heroForm2 = this.fb2.group({
      //name: '初始值', // <--- the FormControl called "name"
      name: ['初始值',Validators.required],
      address: this.fb2.group(new Address()),
    });
    // setValue 缺失值是会报错的
    this.reactive_bulder_heroForm2.setValue({
      name:    this.teacher[0].name,
      address:  this.teacher[0].addresses[0]
    });
    // patchValue 缺失值是不会报错的
    this.reactive_bulder_heroForm2.patchValue({
      name: this.teacher[0].name
    });
  }
  select(teacher: Teacher) { this.selectedTeacher = teacher;console.log(this.selectedTeacher); }
  ngOnChanges() {
    this.reactive_bulder_heroForm2.reset({
      name: this.selectedTeacher.name
    });
  }
  isLoading = false;
  getTeachers() {
    this.isLoading = true;
    this.teachers = this.teacherService.getTeachers()
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
    this.selectedTeacher = undefined;
  }
}
