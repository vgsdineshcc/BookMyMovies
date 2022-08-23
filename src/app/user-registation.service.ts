import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private router:Router,private http:HttpClient) { }
  //Redirect Components
  isAuthenticated():boolean{
    //if (sessionStorage.getItem('token')!==null) {
        return true;
    //}
    //return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        //redirect to login
        this.router.navigate(['/register']);
    }
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/login']);
    }
  }

  public doRegistration(user){
    return this.http.post("http://localhost:8081/api/user/",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    ///alert(this.http.get("http://localhost:8081/api/user/"));
    return this.http.get("http://localhost:8081/api/user/");
  }

  public getUserByEmail(userid){
    
    var app_url="http://localhost:8081/api/user/"+userid;
    //alert(app_url);
    return this.http.get(app_url);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8081/api/user/"+id);
  }
}
