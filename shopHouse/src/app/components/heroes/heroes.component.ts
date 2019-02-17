import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _heroService: HeroService,private router: Router) {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    await this._heroService.getAllHero().subscribe(_heroes => this.heroes = _heroes);
  }
}
