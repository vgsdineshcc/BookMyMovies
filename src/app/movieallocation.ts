import { FileHandle } from "./file-handler.model";

export class MovieAllocation{
    
         movieId:Number;
         movieName:string;
         movieCost:number;
         movieDT:Date;
         timeSlots:string;
         moviePath:String;
         cast:String;
         language:String;
         available:String;
         theaterDetails: Theaterdetail = new Theaterdetail();
         screenDetails: screenDetails = new screenDetails();
    }

    export class Theaterdetail{
          tid:Number;
          tname: String;
    }

    export class screenDetails{
          sid:Number;
         sname:String;
         noofSeat: number;
    }

   // export{MovieAllocation,Theaterdetail};