import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BossmapPageRoutingModule } from './bossmap-routing.module';

import { BossmapPage } from './bossmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BossmapPageRoutingModule
  ],
  declarations: [BossmapPage]
})
export class BossmapPageModule {}
