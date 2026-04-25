import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./Shared/Components/footer/footer";
import { NavComponent } from "./portafolio/components/nav-component/nav-component";
import { HeroComponent } from './portafolio/components/hero-component/hero-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    NavComponent,
    //HeroComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css' 
})
export class App {
  protected readonly title = signal('portafolio');
}
