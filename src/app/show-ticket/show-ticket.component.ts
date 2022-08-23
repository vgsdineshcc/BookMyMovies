import { Component, OnInit } from '@angular/core';
import { MovieallocationService } from '../movieallocation.service';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit {

  constructor(private movieService:MovieallocationService) { }

  tickeDetails:any;


  ngOnInit(): void {

this.tickeDetails=this.movieService.ticketDetails;
  }

}
