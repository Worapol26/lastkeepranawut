import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossmapPage } from './bossmap.page';

const routes: Routes = [
  { path: '', component: BossmapPage },
  { path: 'register', loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule) } // ✅ ตรวจสอบ path
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BossmapPageRoutingModule {}
