import { Component, OnInit } from '@angular/core';
import { MovieallocationService } from '../movieallocation.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {

  constructor(private movieService: MovieallocationService, private loginService: LoginService,private router:Router ) { }
  
  movieAllocationbyidService:any;
  users:any;

  bookMovie(data)
  {
   // alert(data);
    this.router.navigate(['/screenshow']);

   //alert(this.users[0].userid);
  // this.movieService.setMovieDetails(data,this.users[0]);
  }

  ngOnInit(): void {
    this.movieAllocationbyidService= this.movieService.movieAllocationbyidService;
    this.users=this.loginService.users;
   // alert("3---->"+JSON.stringify(this.movieAllocationbyidService));
  }

}
