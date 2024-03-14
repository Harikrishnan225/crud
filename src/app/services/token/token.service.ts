import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(loginToken: any) {
    const token = loginToken;
    localStorage.setItem('currentUser', token);
  }

  getToken() {
    const token = localStorage.getItem('currentUser');
    return token
  }

}
