import { Component, OnInit } from '@angular/core';
import { MovieallocationService } from '../movieallocation.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-screen-details',
  templateUrl: './screen-details.component.html',
  styleUrls: ['./screen-details.component.css']
})
export class ScreenDetailsComponent implements OnInit {
constructor(private movieService: MovieallocationService, private loginService: LoginService,private router:Router) { }
movieAllocationbyidService:any;
users:any;
noOfseats: Number;
arr = [];

checkedTickets = [];

onCheck(evt) {
  if (!this.checkedTickets.includes(evt)) {
    this.checkedTickets.push(evt);
  } else {
    var index = this.checkedTickets.indexOf(evt);
    if (index > -1) {
      this.checkedTickets.splice(index, 1);
    }
  }
}
selectScreen()
{
//alert(this.checkedTickets);
this.movieService.setScreenCheklist(this.checkedTickets);
this.router.navigate(['/payment']);
}

ngOnInit(): void {
  this.movieAllocationbyidService= this.movieService.movieAllocationbyidService;
  this.users=this.loginService.users;
 this.noOfseats=this.movieAllocationbyidService[0].screenDetails.noofSeat;
 
 for(var i = 0; i < this.noOfseats; i++) this.arr.push(i+1);
}

}
