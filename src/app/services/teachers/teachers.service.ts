import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private apiUrl = 'http://localhost:3000/teachers';
  private standardapiUrl = 'http://localhost:3000/standards';

  constructor(
    private http: HttpClient
  ) { }

  getTeachersData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addTeachersData(teacherData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, teacherData);
  }

  getDropDownData(): Observable<any> {
    return this.http.get<any>(this.standardapiUrl)
  }

  getTeachersDataById(teachersId: any) {
    return this.http.get<any>(`${this.apiUrl}/${teachersId}`);
  }

  updateTeachersDataId(teachersId: any, updatedTeachersData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${teachersId}`, updatedTeachersData);
  }

  deleteTeachersData(teachersId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${teachersId}`);
  }
}
