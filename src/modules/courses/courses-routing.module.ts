import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursePlayerComponent } from './components/course-player/course-player.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'courses/:id/lesson/:lesson_id', component: CoursePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
