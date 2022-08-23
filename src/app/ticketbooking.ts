import { MovieAllocation, Theaterdetail } from "./movieallocation";
import { screenDetails } from "./movieallocation";
import { User } from "./user";

export class ticketbooking{
    bid: Number;
    seatnumber:String;
    paymentdetails:String;
    theaterDetails: Theaterdetail=new Theaterdetail();
    screenDetails: screenDetails = new screenDetails();
    movieAllocation: MovieAllocation = new MovieAllocation();
    userDetails: User = new User("","","","");
}