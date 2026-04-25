import { Routes } from '@angular/router';
import { ProyectsPage } from './pages/proyects-page/proyects-page';
import { HomePage } from './pages/home-page/home-page';
import { CvPage } from './pages/cv-page/cv-page';
import { SkillPage } from './pages/skill-page/skill-page';
import { CertificacionesPage } from './pages/certificaciones-page/certificaciones-page';

export const portafolioRoutes: Routes = [
  {
    path: '',
    component: HomePage,
    // children: [
    //   {
    //     path: 'cv',
    //     component: CvPage
    //   }
    // ]
  },

  {
    path: 'proyectos',
    component: ProyectsPage
  },

  {
    path: 'certificaciones',
    component: CertificacionesPage
  },

  {
    path: 'skills',
    component: SkillPage
  },

  {
    path: 'cv',
    component: CvPage
  },

  //! Cualquier otra ruta que no exista
  {
    path: '**',
    redirectTo: '',
  }
]

//! Exportamos las rutas para que puedan ser utilizadas en el módulo de rutas
export default portafolioRoutes;
