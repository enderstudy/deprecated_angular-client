import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MetadataComponent } from './components/metadata/metadata.component';
import { MetadataService } from './components/metadata/services/metadata.service';
import { FormsModule } from '@angular/forms';
import { ClaimedStateCourseMetaFilterPipe } from './pipes/claimed-state-course-meta-filter.pipe';

@NgModule({
  declarations: [
    MetadataComponent,
    ClaimedStateCourseMetaFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [
    MetadataService
  ]
})
export class AdminModule { }
