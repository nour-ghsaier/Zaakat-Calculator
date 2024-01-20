import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  Api_url = "http://localhost:3600/api";
  token: string='';
  constructor(private http : HttpClient) { }

  ///////////////////   Register ///////////////////
  
  register(user: any): Observable<User> {
   
    
    return this.http.post<User>(`${this.Api_url}/register`, user);
  }

  /////////////////login//////////////////
 login(email:string,password:string): Observable<User> {
  const body={email:email,password:password}
  console.log("jjjjjjjjjj")
  return this.http.post<User>(`${this.Api_url}/login`, body);
 }
 
 getToken(): any {
 return localStorage.getItem('access_token');
}

clearToken() {
 localStorage.removeItem(this.token);
 }

}