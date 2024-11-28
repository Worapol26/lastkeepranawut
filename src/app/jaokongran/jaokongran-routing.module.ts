import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JaokongranPage } from './jaokongran.page';

const routes: Routes = [
  {
    path: '',
    component: JaokongranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JaokongranPageRoutingModule {}
