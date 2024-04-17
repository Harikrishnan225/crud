import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqlteachersService {

  private apiUrl = 'http://localhost:3000/teachersseq';
  private standardapiUrl = 'http://localhost:3000/seqstandard';

  constructor(
    private http: HttpClient
  ) { }

  createTeacher(teachersData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, teachersData);
  }

  getTeacherById(teachersId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${teachersId}`);
  }

  getTeachers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateTeacher(teacherId: any, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${teacherId}`, updatedData);
  }

  deleteTeachers(teachersId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${teachersId}`)
  }

  getDropDownData(): Observable<any> {
    return this.http.get<any>(this.standardapiUrl)
  }
}
