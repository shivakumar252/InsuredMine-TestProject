import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomescreenComponent } from './homescreen.component';
import { sharedModule } from '../shared.module';



@NgModule({
  declarations: [HomescreenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    sharedModule
  ]
})
export class HomescreenModule { }
