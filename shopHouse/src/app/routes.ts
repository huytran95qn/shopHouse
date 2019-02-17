import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';

export const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero-detail/:id', component: HeroDetailComponent },
    { path: 'dashboard', component: DasboardComponent }
]