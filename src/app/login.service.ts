import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
// private url='https://67ed50544387d9117bbd2cdf.mockapi.io/cakeshop/sign-up/';
//   constructor(private http:HttpClient) { }
  
//  addData(data: any): Observable<any> {
//     return this.http.post<any>(this.url, data);
//   }
//  getData(): Observable<any[]> {
//     return this.http.get<any[]>(this.url);
//   }



private loginArray: any[] = [];

  // Add data to array
  addUser(user: any) {
    this.loginArray.push(user);
  }

  // Get full login array
  getUsers() {
    return this.loginArray;
  }

  // Get last logged-in user (for profile)
  getAllUser() {
    if (this.loginArray.length > 0) {
      return this.loginArray[this.loginArray.length - 1];
    }
    return null;
  }

  clearUsers() {
    this.loginArray = [];
  }
}