import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UsernameValidator } from '../username.validator';


@Component({
  selector: 'app-sampleformvalidator',
  templateUrl: './sampleformvalidator.component.html',
  styleUrls: ['./sampleformvalidator.component.css']
})
export class SampleformvalidatorComponent implements OnInit {

 
  form = new FormGroup({  
    username: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace]),  
    password: new FormControl('', [Validators.required,Validators.minLength(3), UsernameValidator.cannotContainSpace])  
  });  
     
  get f(){  
    return this.form.controls;  
  }  
  email: String;
  password: String;
      
  submit(){ 
    if(this.form.value.username == "")
  alert(this.form.value.username);
  //return this.form.controls;  

return false;
//alert(this.form.value.username);
  }  

  constructor() { 
   

  }

  

  ngOnInit(): void {
  }

}
