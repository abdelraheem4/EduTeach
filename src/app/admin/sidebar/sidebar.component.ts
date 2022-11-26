import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private routr:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.toastr.success('success');
  }
  logout()
  {
    localStorage.clear();
    this.routr.navigate(['security/login']);
  }
}
