import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinkaPage } from './sinka.page';

const routes: Routes = [
  {
    path: '',
    component: SinkaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinkaPageRoutingModule {}
