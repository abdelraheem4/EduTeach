import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  User:any=[{}];
  display_image:any;

  constructor(private http:HttpClient,private spinner :NgxSpinnerService ,private toastr:ToastrService) { }

  getALLUser(){
    
    this.spinner.show();
    this.http.get('https://localhost:44352/api/UserAccount').subscribe((res)=>{
      this.User=res;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )

  }



}
