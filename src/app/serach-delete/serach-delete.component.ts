import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {

  users:any;
  email:string;
  userid:number
  usersByid: User = new User("","","","");

  
  constructor(private service:UserRegistationService) { }


public delteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data)=>this.users=data);
}

public findUserByEmailId(){
  let resp= this.service.getUserByEmail(this.userid);
  //alert(resp.subscribe((data)=>this.usersByid=data.constructor));
  resp.subscribe((data)=>this.users=data)
 }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
