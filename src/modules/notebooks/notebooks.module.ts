import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotebooksRoutingModule } from './notebooks-routing.module';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NotebookDetailComponent } from './components/notebook-detail/notebook-detail.component';
import { SharedModule } from '../shared/shared.module';
import { NotebookFormComponent } from './components/notebook-form/notebook-form.component';
import { FormsModule } from '@angular/forms';
import { NotebookService } from './services/notebook.service';
import { HttpClientModule } from '@angular/common/http';
import { CoursesModule } from '../courses/courses.module';
import { NotebookNoteFormComponent } from './components/notebook-note-form/notebook-note-form.component';

@NgModule({
  declarations: [
    NotebookListComponent, 
    NotebookDetailComponent, NotebookFormComponent, NotebookNoteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NotebooksRoutingModule,
    CoursesModule,
    SharedModule
  ],
  providers: [
    NotebookService
  ]
})
export class NotebooksModule { }
