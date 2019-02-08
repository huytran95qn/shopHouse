import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  title: string = 'My Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) {
    this.getHeroes();
  }

  onSelect(_hero: Hero) {
    this.selectedHero = _hero;
  }

  async getHeroes(): Promise<void> {
    await this._heroService.getAllHero().subscribe(_heroes => this.heroes = _heroes);
  }
}
