import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'my-heroes',
  //template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router){}

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  selectedHero: Hero;

  title = 'Tour of Heroes';
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  //hero = 'Windstorm';
}


