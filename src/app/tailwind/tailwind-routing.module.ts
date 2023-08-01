import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TailwindPage } from './tailwind.page';

const routes: Routes = [
  {
    path: '',
    component: TailwindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TailwindPageRoutingModule {}
