import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path: '', component:TasksComponent},
  {path: ':id', component:TasksComponent},
  {path: 'about', component:AboutComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
