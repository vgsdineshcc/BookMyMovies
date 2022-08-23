import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { MovieAllocation, Theaterdetail } from './movieallocation';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ticketbooking } from './ticketbooking';

@Injectable({
  providedIn: 'root'
})
export class MovieallocationService {

  constructor(private http : HttpClient,private router:Router) { }

   // Base URL  
private  baseUrl = "http://localhost:8081/api/admin/";  
private  userbaseUrl = "http://localhost:8081/api/user/";  
movieAllocationbyidService:any;
movieDetailbyId:any;
user:any;
checkedTickets = [];
ticketDetails:any;


  
  canAuthenticate(){
          this.router.navigate(['/showmovie']);
  }

  setScreenCheklist(ticketChecklist)
  {
   // alert(ticketChecklist);
    this.checkedTickets.push(ticketChecklist);
   // alert(this.checkedTickets);
  }
  
  saveData(movieAlloc : MovieAllocation) : Observable<any>  
  {  
      let url = this.baseUrl + "saveMoview";  
      return this.http.post(url,movieAlloc);  
  }  

  //TicketBooking
  putticketbooking(ticketBooking: ticketbooking)
  {
    let url = this.userbaseUrl + "inserbooking";  
      return this.http.post(url,ticketBooking); 
  }
  
  uploadFile( file: File , id : number,movieAlloc : MovieAllocation ) : Observable<any>  
  {  
    let url = this.baseUrl + "uploadImage/" + id ;  
    const data = JSON.stringify({movieAlloc});
    const formdata: FormData = new FormData();  
    formdata.append('file', file);  
    return this.http.post(url , formdata);  
  }  

  //getMovieDetails
  getMovieDetails()
  {
    let url = this.baseUrl + "getmovie";  
    return this.http.get(url); 
  }

  //GetMovieById
  getMovieDetailsbyId(movieId)
  {
    let url = this.baseUrl + "getmovie/"+movieId;  
    return this.http.get(url); 
  }
  showBookingDetails(movieAllocationbyid)
  {
    this.movieAllocationbyidService = movieAllocationbyid;
    this.router.navigate(['/ticketbook']);
  }

  showTicketDetails(ticketBooking)
  {
    this.ticketDetails = ticketBooking;
    this.router.navigate(['/showticket']);
  }

}
