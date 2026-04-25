import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav-component/nav-component';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { RouterOutlet } from '@angular/router';
import { ExperienciaIndexComponent } from './components/experiencia-index-component/experiencia-index-component';
import { ProyectosTitleComponent } from './components/proyectos-title-component/proyectos-title-component';
import { CertificadoComponent } from "./components/certificado-component/certificado-component";
import { EducacionComponent } from './components/educacion-component/educacion-component';
import { SkillsComponent } from './components/skills-component/skills-component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    ExperienciaIndexComponent,
    ProyectosTitleComponent,
    CertificadoComponent,
    EducacionComponent,
    SkillsComponent
],
  templateUrl: './home-page.html',
})
export class HomePage { }
