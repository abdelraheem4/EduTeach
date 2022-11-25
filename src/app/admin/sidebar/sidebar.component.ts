import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private routr:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.clear();
    this.routr.navigate(['security/login']);
  }
}
