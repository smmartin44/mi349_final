import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolViewComponent } from './school-view/school-view.component';
import { WorkViewComponent } from './work-view/work-view.component';

const routes: Routes = [
  {path: '', component: SchoolViewComponent},
  {path: 'work', component: WorkViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
