import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sinka3Page } from './sinka3.page';

const routes: Routes = [
  {
    path: '',
    component: Sinka3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sinka3PageRoutingModule {}
