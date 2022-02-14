import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockageRoutingModule } from './stockage-routing.module';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';


@NgModule({
  declarations: [
    DisqueDurComponent
  ],
  imports: [
    CommonModule,
    StockageRoutingModule
  ]
})
export class StockageModule { }
