import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetadataComponent } from './components/metadata/metadata.component';

const routes: Routes = [
  { path: 'admin/metadata', component: MetadataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
