import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLogDataPage } from './view-log-data.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLogDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLogDataPageRoutingModule {}
