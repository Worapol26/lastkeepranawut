import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakraPage } from './takra.page';

const routes: Routes = [
  {
    path: '',
    component: TakraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakraPageRoutingModule {}
