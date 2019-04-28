import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from '../common.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn
  username
  constructor(private router: Router, private cs: CommonService) {
  }

  ngDoCheck() {
    this.isLoggedIn = localStorage.getItem('email');
    if (this.cs.username == undefined)
      this.username = localStorage.getItem('name');
    else
      this.username = this.cs.username
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
