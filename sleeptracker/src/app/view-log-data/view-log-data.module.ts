import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLogDataPageRoutingModule } from './view-log-data-routing.module';

import { ViewLogDataPage } from './view-log-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLogDataPageRoutingModule
  ],
  declarations: [ViewLogDataPage]
})
export class ViewLogDataPageModule {}
