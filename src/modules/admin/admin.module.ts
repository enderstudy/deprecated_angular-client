import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MetadataComponent } from './components/metadata/metadata.component';
import { MetadataService } from './components/metadata/services/metadata.service';
import { FormsModule } from '@angular/forms';
import { UnclaimedCourseMetaPipe } from './pipes/unclaimed-course-meta.pipe';
import { ClaimedCourseMetaPipe } from './pipes/claimed-course-meta.pipe';

@NgModule({
  declarations: [
    MetadataComponent,
    UnclaimedCourseMetaPipe,
    ClaimedCourseMetaPipe
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
