import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from './hero.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],

})
export class HeroListComponent implements OnInit {
  @Input() heroes: Heroes;
  
  constructor() { }

  ngOnInit() {
  }

}
