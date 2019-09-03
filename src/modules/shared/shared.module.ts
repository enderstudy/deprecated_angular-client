import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { AuthService } from './services/auth.service';
import { TagsFilterComponent } from './components/tags-filter/tags-filter.component';

@NgModule({
  declarations: [
      LoadingIndicatorComponent,
      TagsFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      LoadingIndicatorComponent,
      TagsFilterComponent
  ],
  providers: [
      AuthService
  ]
})
export class SharedModule { }
