import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { TakraPageRoutingModule } from './takra-routing.module';

import { TakraPage } from './takra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakraPageRoutingModule
  ],
  declarations: [TakraPage]
})
export class TakraPageModule {}
