import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserLoggin!: boolean;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }
  private apiUrl = 'http://localhost:3000/login';

  login(loginDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginDetails);
  }

  isLogin() {
    const userToken = this.tokenService.getToken();
    console.log(userToken);
    if (userToken) {
      return true
    } else {
      return false
    }
  }
}
