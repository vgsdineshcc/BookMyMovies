import { Component, OnInit } from '@angular/core';
import { MovieallocationService } from '../movieallocation.service';

@Component({
  selector: 'app-showmoview',
  templateUrl: './showmoview.component.html',
  styleUrls: ['./showmoview.component.css']
})
export class ShowmoviewComponent implements OnInit {
  movieAllocation:any;
  movieAllocationbyid:any;
  start : number = 5;
  end : number = 10;

  startSlice: Array<Number>=[];
  endSlice: Array<number>=[];
  
  addNumber(a,b)
  {
    return a + b;
  }
 
setMovieslice(data) {
  //alert(data);
  let num:number = data; 
  let i:number; 
  let j: number;
for(i = 4;i<num;i++) {
  if(i%4==0)
  {
    j=i;
    alert(j+"--"+this.addNumber(j,4));
    this.startSlice.push(j);
    this.endSlice.push(this.addNumber(j,4));
  }
}
}

  constructor(private movieService: MovieallocationService) { }

  getMovieDetailsbyId(movieId: number)
  {
    ///alert(movieId);
    let resp = this.movieService.getMovieDetailsbyId(movieId);
    ///alert(resp);
    resp.subscribe({
      next:data=>{
      //alert("1---->"+JSON.stringify(data));
      this.movieAllocationbyid=data;
     // alert("2---->"+JSON.stringify(this.movieAllocationbyid));
      this.movieService.showBookingDetails(this.movieAllocationbyid);
     // this.setMovieslice(this.movieAllocation.length);
      }
    }); 
   
      //this.setMovieslice(this.movieAllocation.length)
  }
  ngOnInit(): void {
    let resp = this.movieService.getMovieDetails();
    resp.subscribe({
      next:data=>{
      this.movieAllocation=data;
     // this.setMovieslice(this.movieAllocation.length);
      }
    });
    
  }

}
