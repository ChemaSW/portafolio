import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-component',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav-component.html',
})
export class NavComponent { }
