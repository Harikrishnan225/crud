import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';


  constructor(
    private http: HttpClient
  ) { }

  registerStudent(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { email, password });
  }

}
