import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { SleepyScalePage } from './sleepy-scale/sleepy-scale.page';
import { DailyReportPage } from './daily-report/daily-report.page';
import { ViewLogDataPage } from './view-log-data/view-log-data.page';
import { BackupLogDataPage } from './backup-log-data/backup-log-data.page';
import { LogsleepPage } from './logsleep/logsleep.page';
import {FormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';
@NgModule({
  declarations: [
    AppComponent,
    DailyReportPage,
    SleepyScalePage,
    ViewLogDataPage,
    BackupLogDataPage
  ],


  entryComponents: [
    DailyReportPage,
    SleepyScalePage,
    ViewLogDataPage,
    BackupLogDataPage
  ],



  imports: [BrowserModule, IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
  
  
})
export class AppModule {}
