import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sinka3PageRoutingModule } from './sinka3-routing.module';

import { Sinka3Page } from './sinka3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sinka3PageRoutingModule
  ],
  declarations: [Sinka3Page]
})
export class Sinka3PageModule {}
