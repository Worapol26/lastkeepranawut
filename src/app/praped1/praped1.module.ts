import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Praped1PageRoutingModule } from './praped1-routing.module';

import { Praped1Page } from './praped1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Praped1PageRoutingModule
  ],
  declarations: [Praped1Page]
})
export class Praped1PageModule {}
