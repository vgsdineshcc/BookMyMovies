import { Time } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../file-handler.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { MovieAllocation } from '../movieallocation';
import { MovieallocationService } from '../movieallocation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  myDate: Date = new Date();
  movieEndTime: String;
  selectedFiles: FileList;  
  currentFileUpload: File;  
  movieAllcation: MovieAllocation = new MovieAllocation();
  constructor(private movieService : MovieallocationService) { }
  ngOnInit(): void {
  }
  registerMovie(){
    this.movieAllcation.timeSlots=this.movieAllcation.timeSlots+" to "+this.movieEndTime;
    let resp = this.movieService.saveData(this.movieAllcation);
    resp.subscribe({
      next:data=>{
        if(data > 0)
        {
          if(this.selectedFiles != null)  
          {
            this.currentFileUpload = this.selectedFiles.item(0);  
            console.log(this.currentFileUpload);  
            this.movieService.uploadFile(this.currentFileUpload , data,this.movieAllcation).subscribe(  
              res => {  
                 if(res > 0)  
                 {  
                    alert("file upload successfully ");  
                    this.movieService.canAuthenticate();
                 }  
                 else{  
                    alert("error while uploading fie details");  
                 }  
              },  
              err => {  
                  alert("error while uploading fie details");  
              }  
          ); 
          } 
        }
    }
    })
  
  }
  
readUrl(event) {
  const file = event.target.files.item(0);  
   
  if (file.type.match('image.*')) {  
    var size = event.target.files[0].size;  
    if(size > 1000000)  
    {  
        alert("size must not exceeds 1 MB");  
      //document.getElementsByName('movieImage');
    }  
    else  
    {  
      this.selectedFiles = event.target.files;  
    }  
  } else {  
    alert('invalid format!');  
  } 
}

  


}

