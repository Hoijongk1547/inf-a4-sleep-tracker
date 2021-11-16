import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepyScalePageRoutingModule } from './sleepy-scale-routing.module';

import { SleepyScalePage } from './sleepy-scale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepyScalePageRoutingModule
  ],
  declarations: [SleepyScalePage]
})
export class SleepyScalePageModule {}
