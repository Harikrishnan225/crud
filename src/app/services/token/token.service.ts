import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(loginToken: any) {
    localStorage.setItem('currentUser', JSON.stringify({ token: loginToken }));
  }

  getToken() {
    const token = localStorage.getItem('currentUser');
    console.log(token);
    return token
  }

}
