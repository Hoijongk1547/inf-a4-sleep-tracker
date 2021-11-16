import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyReportPageRoutingModule } from './daily-report-routing.module';

import { DailyReportPage } from './daily-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DailyReportPageRoutingModule
  ],
  declarations: [DailyReportPage]
})
export class DailyReportPageModule {}
