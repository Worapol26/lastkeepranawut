import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sinka2PageRoutingModule } from './sinka2-routing.module';

import { Sinka2Page } from './sinka2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sinka2PageRoutingModule
  ],
  declarations: [Sinka2Page]
})
export class Sinka2PageModule {}
