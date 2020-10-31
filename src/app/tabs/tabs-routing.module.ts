import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'educ',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../cursos/cursos.module').then(m => m.CursosPageModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('../notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
      },
      {
        path: 'encuestas',
        loadChildren: () => import('../encuestas/encuestas.module').then(m => m.EncuestasPageModule)
      },
      {
        path: '',
        redirectTo: '/educ/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/educ/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
