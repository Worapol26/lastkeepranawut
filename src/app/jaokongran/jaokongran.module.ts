import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JaokongranPageRoutingModule } from './jaokongran-routing.module';

import { JaokongranPage } from './jaokongran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JaokongranPageRoutingModule
  ],
  declarations: [JaokongranPage]
})
export class JaokongranPageModule {}
