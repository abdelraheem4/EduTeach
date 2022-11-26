import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  constructor(private router:Router,public home:HomeService,private dialog:MatDialog) { }
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  @ViewChild('callDeleteDailog') callDeleteDailog!:TemplateRef<any> 



  updateForm:FormGroup= new FormGroup({
    userid:new FormControl(),
    fullname:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    image:new FormControl(),
    phonenumber:new FormControl(),
    age:new FormControl(),
    numberofvaccines:new FormControl(),
    email:new FormControl('',Validators.required),
    password:new FormControl(),
    roleid:new FormControl()
  })

  ngOnInit(): void {
  }


  opendialog()
  {
   // this .dialog.open(CreateCourseComponent)
  }
  p_data :any={};

  openUpdateDailog(obj:any)
  {
    this.p_data={
    courseid:obj.courseid,
    coursename:obj.coursename,
    categoreyid:obj.categoreyid,
    imageName:obj.imageName
  }
  this.updateForm.controls['courseid'].setValue(this.p_data.courseid);
  this.dialog.open(this.callUpdateDailog);
  }




  
  saveData()
  {
    debugger
    //this .home.updateCourse(this.updateForm.value)
  }

  uploadfile(file:any)
  {
  //   if(file.length==0)
  //   return;
  //  let fileToUpload=<File>file[0]
  //  const formdata =new FormData();
  //  formdata.append('file',fileToUpload,fileToUpload.name);
  //  this.home.uoloadAttachment(formdata);
  }

  openDeleteDailog(id:number)
  {
    // const dialogRef=this.dialog.open(this.callDeleteDailog);
    // dialogRef.afterClosed().subscribe((result)=>{
    //   if(result!=undefined)
    //   {
    //     if(result=='yes')
    //     this.home.deleteCourse(id);
    //     else if (result=='no')
    //     console.log('thank you')
    //   }
    // })
  }

}
