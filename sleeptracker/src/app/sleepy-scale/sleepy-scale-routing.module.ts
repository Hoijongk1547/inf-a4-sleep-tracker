import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepyScalePage } from './sleepy-scale.page';

const routes: Routes = [
  {
    path: '',
    component: SleepyScalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepyScalePageRoutingModule {}
