import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-galleryscreen',
  templateUrl: './galleryscreen.component.html',
  styleUrls: ['./galleryscreen.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class GalleryscreenComponent implements OnInit {
  _subscriptions = new Subscription();
  isPrivate:String;
  isPrivateUser:boolean;
  userName:string;
  gallerySource: any[];
  constructor(private galleryService:GalleryService,private route:ActivatedRoute,private router:Router) { 
    this.route.queryParams.subscribe((params:any) => {
      if(params){
    this.isPrivate = params.isPrivate;
    this.userName = params.userName;
  if(this.isPrivate=="true"){
   this.isPrivateUser = true;
  }else{
    this.isPrivateUser = false;
  }
    
   }
  });
  }

  ngOnInit(): void {
    this.getGalleryImagesFromServer();
  }
getGalleryImagesFromServer(){
this._subscriptions.add(this.galleryService.getGalleryImages().subscribe((data:any)=>{
this.gallerySource = data;
// console.log(this.gallerySource);
}));
}
ngOnDestroy(){
  this._subscriptions.unsubscribe();
}
}
