import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'butons-hero-component',
  imports: [
  ],
  templateUrl: './butons-hero-component.html',
})
export class ButonsHeroComponent {

  descargarCV() {
    const link = document.createElement('a');
    link.href = '/CV_Jose_Manuel_Contreras_Rocha.pdf';
    link.download = 'CV_Jose_Manuel_Contreras_Rocha.pdf';
    link.click();
  }

}
