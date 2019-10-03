import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LessonProgressComponent } from './components/lesson-progress/lesson-progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LessonProgressComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
