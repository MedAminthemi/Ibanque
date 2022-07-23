
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthServiceService {

  public getToken(): string {

    return localStorage.getItem('token');
    
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean indicating whether or not the token is expired
    console.log("getting token in auth service",tokenNotExpired(null,token));
   
    return tokenNotExpired(null,token);
  }

}
