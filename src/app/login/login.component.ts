import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UsernameValidator } from '../username.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  users:any;
  loading:false;

  constructor(private loginService:LoginService,private fb: FormBuilder) { }

  form = new FormGroup({  
    username: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace]),  
    password: new FormControl('', [Validators.required,Validators.minLength(3), UsernameValidator.cannotContainSpace])  
  });  
     
  get f(){  
    return this.form.controls;  
  }  

  formValidation() : boolean
  {
    if(this.form.value.username == ""){
      alert("Please Enter User Name");
    return false;
        }
        else 
        {
return true;
        }
        if(this.form.value.password == ""){
          alert("Please Enter password");
        return false;
            }
            else{
              return true;
            }

            
  }

  public loginUser(){
    //alert("loginUser"+this.email+"---"+this.password);
    this.formValidation();
    let resp = this.loginService.getUser(this.email,this.password);
    resp.subscribe({
      next:data=>{
        this.users=data;
        this.loginService.canAuthenticate(this.users);
    }
    }).add(()=>{
      this.loading =false;
      console.log('Logged in Successfully!');
    })
    }

  ngOnInit(): void {
  }

}
