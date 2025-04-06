import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: any;
constructor(private router:Router , private loginservice:LoginService){}
  ngOnInit(): void {
    
    this.currentUser = this.loginservice.getAllUser();
  
  }
  logout(): void {
    alert("Logged out");
    // localStorage.removeItem('CurrentUser');
    this.loginservice.clearUsers();
    this.router.navigate(['']);
  }
}
