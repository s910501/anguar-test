import { Hero } from './../hero';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  //inputs: ['hero'],
  //outputs: ['deleteRequest'],
})
export class HeroDetailComponent implements OnInit {
  private _name :Hero;
  //@Input() hero:Hero ;
  @Input('master') masterName: string;
  //对输入的值进行格式
  @Input()
  set hero(hero: Hero){
    if(hero.name){
      this._name = {id:hero.id,name:hero.name}
    }else{
      this._name = new Hero(0,'<no name set>');
    }
    //this._name = (hero && hero.name.trim()) || new Hero(0,'<no name set>');
   }
  get hero():Hero { return this._name; }
  @Output() deleteRequest = new EventEmitter<Hero>();
  @Output('myClick') clicks = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
