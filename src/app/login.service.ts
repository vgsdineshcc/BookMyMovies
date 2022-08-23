import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router,private http:HttpClient) { 

    
  }

  users:any;

  //Redirect Components
  isAuthenticated():boolean{
    if(this.users[0].uname == "null")
    {
      this.router.navigate(['/login']);
      alert("userName or Password is Wrong");
        return false;
      }
      else{
        this.router.navigate(['/home']);
        return true;
      }
  }
  
  canAuthenticate(users){
      this.users=users;
      this.isAuthenticated();
  }

  public getUser(userid,password){
    
    var app_url="http://localhost:8081/api/user/"+userid+"/"+password;
    //alert(app_url);
    return this.http.get(app_url);
  }
}
