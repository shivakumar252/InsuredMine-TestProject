import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class HomescreenComponent implements OnInit {
  isPrivate:String;
  isPrivateUser:boolean;
  userName:string;
  homeScreenTitle = GlobalConstants.homePageFirstSectionTitle;
  homeScreenSecondTitle = GlobalConstants.homePageSecondSectionTitle;
  firstDescription = GlobalConstants.homePageDescriptionFirst;
  secondDescription = GlobalConstants.homePageDescriptionSecond;
  thirdDesription = GlobalConstants.homePageDescriptionThird;
  fourthDescription = GlobalConstants.homePageDescriptionForth;
  fifthDescription = GlobalConstants.homePageDescriptionFifth;
  sixthDescription = GlobalConstants.homePageDescriptionSixth;
  seventhDescription = GlobalConstants.homePageDescriptionSeventh;
  constructor(private route:ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe((params:any) => {
      if(params){
    this.isPrivate = params.isPrivate;
    this.userName = params.userName;
    if(this.isPrivate == "true"){
      this.isPrivateUser = true;
     
    }else{
      this.isPrivateUser = false;
  
    }
    
   }
  });
}

  ngOnInit(): void {

  }
  onClickOfAbout(){
    this.router.navigate(['/about/aboutpage'],{ queryParams: { isPrivate: this.isPrivateUser, userName:this.userName }, skipLocationChange: true ,
    queryParamsHandling: 'merge' });
  }
  onClickOfGallery(){
    this.router.navigate(['/gallery/gallerypage'],{ queryParams: { isPrivate: this.isPrivateUser, userName:this.userName }, skipLocationChange: true ,
    queryParamsHandling: 'merge' });
  }

}
