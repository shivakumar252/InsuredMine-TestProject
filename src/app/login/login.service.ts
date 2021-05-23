import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { 

  }
  getUserList(){
    return this.httpClient.get("assets/userlist.json").pipe(map((response:any)=>{
      return response;
    }));
  }
}
