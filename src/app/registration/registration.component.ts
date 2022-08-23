import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  message:any;
  user: User=new User("","","","");
  uname: String;
  email: String;
  password: String;
  gender: String;
  loading=false;
  
  
constructor(private service:UserRegistationService) { }
  
ngOnInit() {
  }
  
public registerNow(){
 
let resp=this.service.doRegistration(this.user= {uname: this.uname, email: this.email, password: this.password, gender: this.gender});
resp.subscribe({
  next:data=>{
    this.message=data;
    this.service.canAuthenticate();
}
}).add(()=>{
  this.loading =false;
  console.log('Registration process completed!');
})
}
}

