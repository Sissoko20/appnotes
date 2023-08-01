import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
 
      {
        path: 'params',
        loadChildren: () => import('./params/params.module').then( m => m.ParamsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'chating',
        loadChildren: () => import('../chating/chating.module').then( m => m.ChatingPageModule)
      },
      {
        path: 'tailwind',
        loadChildren: () => import('../tailwind/tailwind.module').then( m => m.TailwindPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }

    ]
  },
  // eslint-disable-next-line no-trailing-spaces
 
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
