import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BossmapPage } from './bossmap.page';

const routes: Routes = [
  {
    path: '',
    component: BossmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BossmapPageRoutingModule {}
