import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Praped1Page } from './praped1.page';

const routes: Routes = [
  {
    path: '',
    component: Praped1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Praped1PageRoutingModule {}
