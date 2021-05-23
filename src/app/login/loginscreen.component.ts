import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css'],
  
})
export class LoginscreenComponent implements OnInit {
  userForm:FormGroup;
  public isVisible: boolean = false;
  constructor(private router:Router, private fb: FormBuilder,private toastr: ToastrService) { 

  }


  ngOnInit(): void {
   this.userForm =  this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$"),
        Validators.required, Validators.pattern(/^(\d{10}|[A-Za-z0-9.]{2,}[@]{1}[a-z]{2,}[.]{1}[a-z]{2,})$/)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ]))
  }); 
  }
  showVal(eventValue) {
    
    this.userForm.get("name").setValidators([Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]);
    this.userForm.get("name").updateValueAndValidity();
  }
  onClickOfLogin(data){
    if(this.userForm.value.name == "abc@media.com" && this.userForm.value.password=="abc123" ){
      this.router.navigate(['/home/homepage'],{ queryParams: { isPrivate: true, userName:this.userForm.value.name }, skipLocationChange: true ,
      queryParamsHandling: 'merge' });
        this.toastr.success('Login Successfully!', this.userForm.value.name);
   
    }else if(this.userForm.value.name == "def@media.com" && this.userForm.value.password=="def123" ){
      this.router.navigate(['/home/homepage'],{ queryParams: { isPrivate: false, userName:this.userForm.value.name }, skipLocationChange: true ,
      queryParamsHandling: 'merge' });
      this.toastr.success('Login Successfully!', this.userForm.value.name);
    }else{
      this.toastr.error('Please fill the Mandatory Fields');
    }
  
  }

}
