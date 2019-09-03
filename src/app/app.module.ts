import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoursesModule } from '../modules/courses/courses.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../modules/auth/auth.module';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotebooksModule } from 'src/modules/notebooks/notebooks.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoursesModule,
    AuthModule,
    NotebooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
