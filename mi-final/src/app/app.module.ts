import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { BioComponent } from './bio/bio.component';
import { WorkViewComponent } from './work-view/work-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolViewComponent,
    BioComponent,
    WorkViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
