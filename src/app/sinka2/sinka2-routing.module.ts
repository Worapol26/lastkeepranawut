import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sinka2Page } from './sinka2.page';

const routes: Routes = [
  {
    path: '',
    component: Sinka2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sinka2PageRoutingModule {}
