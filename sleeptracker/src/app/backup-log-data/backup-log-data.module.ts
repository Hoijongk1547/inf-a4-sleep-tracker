import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackupLogDataPageRoutingModule } from './backup-log-data-routing.module';

import { BackupLogDataPage } from './backup-log-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackupLogDataPageRoutingModule
  ],
  declarations: [BackupLogDataPage]
})
export class BackupLogDataPageModule {}
