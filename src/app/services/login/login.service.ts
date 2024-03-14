import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserLoggin!: boolean;
  private http = inject(HttpClient);
  subject = new Subject();


  constructor(
    private tokenService: TokenService
  ) {
    // const authToken = this.tokenService.getToken();
    // if (authToken) {
    //   this.isUserLoggin = true
    // }
  }
  private apiUrl = 'http://localhost:3000/login';

  login(loginDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginDetails);

  }

  isLogin() {
    const userToken = this.tokenService.getToken();
    if (userToken) {
      return true
    } else {
      return false
    }
  }
}
