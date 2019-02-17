import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent {
  heroes: Hero[];
  constructor(private _heroService: HeroService) {
    this.getHeroesRandom();
  }

  async getHeroesRandom(): Promise<void> {
    await this._heroService.getHeroesRadom().subscribe(_q => this.heroes = _q);
  }
}
