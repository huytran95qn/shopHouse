import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  heroes: Hero;

  constructor(private _heroService: HeroService, private route: ActivatedRoute, private location: Location) {
    let _id: number = +this.route.snapshot.paramMap.get('id');
    this.getHeroesById(_id);
  }

  goBack(): void {
    this.location.back();
  }

  async getHeroesById(id: number): Promise<void> {
    await this._heroService.getHeroById(id).subscribe(_heroes => this.heroes = _heroes);
  }
}
