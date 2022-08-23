import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

users:any;

  constructor(private loginService: LoginService) { 
this.users=this.loginService.users;

  }
  ngOnInit(): void {
  }

}
