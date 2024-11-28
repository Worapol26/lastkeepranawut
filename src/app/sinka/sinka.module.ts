import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinkaPageRoutingModule } from './sinka-routing.module';

import { SinkaPage } from './sinka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinkaPageRoutingModule
  ],
  declarations: [SinkaPage]
})
export class SinkaPageModule {}
