import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NotebookDetailComponent } from './components/notebook-detail/notebook-detail.component';
import { NotebookFormComponent } from './components/notebook-form/notebook-form.component';
import { NotebookNoteFormComponent } from './components/notebook-note-form/notebook-note-form.component';

const routes: Routes = [
  { path: 'notebooks', component: NotebookListComponent },
  { path: 'notebooks/create', component: NotebookFormComponent },
  { path: 'notebooks/:id', component: NotebookDetailComponent },
  { path: 'notebooks/:id/create', component: NotebookNoteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotebooksRoutingModule { }
