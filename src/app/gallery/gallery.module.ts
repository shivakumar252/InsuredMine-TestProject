import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryscreenComponent } from './galleryscreen.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from './gallery.service';
import { HeaderComponent } from '../header/header.component';
import { sharedModule } from '../shared.module';
import { AnimateInModule } from 'ngx-animate-in';

@NgModule({
  declarations: [GalleryscreenComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HttpClientModule,
    sharedModule,
    AnimateInModule
  ],
  providers: [
    GalleryService
]
})
export class GalleryModule { }
