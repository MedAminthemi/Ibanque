import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user/User';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServer = "http://localhost:8080/api/auth";
  httpOptions = {
    headers: new HttpHeaders({
      'CONTENT_TYPE': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }



  SignIn(User): Observable<User> {
    console.log('service',User) ; 
   return this.httpClient.post<User>(this.apiServer + '/signin', User,{
    headers:new HttpHeaders()
    .set('Content-Type','application/json') 
    }) ; 
}

GetAllUsers(){
  return this.httpClient.get('http://localhost:8080/api/users/getall',{
    headers:new HttpHeaders()
    .set('Content-Type','application/json') 
    }) ; 
}
}
