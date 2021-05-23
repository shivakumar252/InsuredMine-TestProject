import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient:HttpClient) {

   }
   getGalleryImages(){
     return this.httpClient.get('assets/galleryfile.json').pipe(map((response:any)=>{
      return response;
     }));
   }
}
