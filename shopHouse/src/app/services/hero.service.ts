import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/hero.mock';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getAllHero(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHeroById(_id: number): Observable<Hero> {
    return of(HEROES.find(_q => _q.id === _id))
  }

  getHeroesRadom(): Observable<Hero[]> {
    let _heroes: Hero[] = [];
    this.sampleSizeForHeroes(_heroes, 4);
    return of(_heroes);
  }

  private getRandom(): number {
    return Math.floor(Math.random() * HEROES.length);
  }

  private isArray(_array: Array<any>): boolean {
    return _array && _array.length > 0;
  }

  private findHero(heroes: Hero[], randomId: number): boolean {
    return this.isArray(heroes) && heroes.find(_q => _q.id === randomId) ? true : false;
  }

  private sampleSizeForHeroes(heroes: Hero[], size: number): Hero[] {
    if (size === 0) {
      return;
    } else {
      let _randomHero: Hero = HEROES[this.getRandom()];
      let _findHero = this.isArray(heroes) ? heroes.find(_q => _q.id === _randomHero.id) : null;
      if (!this.findHero(heroes, _randomHero.id)) {
        heroes.push(_randomHero);
        this.sampleSizeForHeroes(heroes, size - 1);
      } else {
        this.sampleSizeForHeroes(heroes, size);
      }
    }
  }
}
