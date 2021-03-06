import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomescreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }