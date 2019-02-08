import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/hero.mock';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getAllHero(): Observable<Hero[]> {
    return of(HEROES);  
  }
}
