import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { SmartPhonesComponent } from './smart-phones/smart-phones.component';


@NgModule({
  declarations: [
    SmartPhonesComponent
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
