import { Component } from '@angular/core';
import { ButonsHeroComponent } from "../butons-hero-component/butons-hero-component";
import { IconsHeroComponent } from '../icons-hero-component/icons-hero-component';

@Component({
  selector: 'hero-component',
  imports: [
    ButonsHeroComponent,
    IconsHeroComponent
  ],
  templateUrl: './hero-component.html',
})
export class HeroComponent { }
