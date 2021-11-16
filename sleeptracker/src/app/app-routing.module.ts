import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  {
    path: 'daily-report',
    loadChildren: () => import('./daily-report/daily-report.module').then( m => m.DailyReportPageModule)
  },
  {
    path: 'sleepy-scale',
    loadChildren: () => import('./sleepy-scale/sleepy-scale.module').then( m => m.SleepyScalePageModule)
  },
  {
    path: 'view-log-data',
    loadChildren: () => import('./view-log-data/view-log-data.module').then( m => m.ViewLogDataPageModule)
  },
  {
    path: 'backup-log-data',
    loadChildren: () => import('./backup-log-data/backup-log-data.module').then( m => m.BackupLogDataPageModule)
  },
  {
    path: 'logsleep',
    loadChildren: () => import('./logsleep/logsleep.module').then( m => m.LogsleepPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
