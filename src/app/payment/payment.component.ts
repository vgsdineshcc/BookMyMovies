import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MovieallocationService } from '../movieallocation.service';
import { ticketbooking } from '../ticketbooking';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  movieAllocationbyidService:any
  checkedTickets:any;
  users:any;
  ticketResponse:any;

  constructor(private movieservice: MovieallocationService,private loginservice: LoginService, private router: Router) { }
  ticketbooking:ticketbooking=new ticketbooking();

tostring (value:any): String {

  return String(value);
  
}

BookTicket()
{
this.ticketbooking.movieAllocation.movieId=this.movieAllocationbyidService[0].movieId;
this.ticketbooking.userDetails=this.users[0];
this.ticketbooking.seatnumber=this.tostring(this.checkedTickets);
this.ticketbooking.paymentdetails="Success";
this.ticketbooking.screenDetails.sid=this.movieAllocationbyidService[0].screenDetails.sid;
this.ticketbooking.theaterDetails.tid=this.movieAllocationbyidService[0].theaterDetails.tid;
let resp = this.movieservice.putticketbooking(this.ticketbooking);
resp.subscribe({
  next:data=>{
   //alert(data);
   this.ticketResponse=data;
   this.movieservice.showTicketDetails(this.ticketResponse);
  // alert(JSON.stringify(this.ticketResponse));
   //this.router.navigate['/showticket'];
}
})
}

  ngOnInit(): void {
   this.movieAllocationbyidService = this.movieservice.movieAllocationbyidService;
   this.checkedTickets=this.movieservice.checkedTickets;
   this.users=this.loginservice.users;
  }

}
