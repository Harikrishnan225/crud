import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  private apiUrl = 'http://localhost:3000/students';
  private standardapiUrl = 'http://localhost:3000/standard';

  constructor(private http: HttpClient) { }

  getStudentsDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStandards(): Observable<any> {
    return this.http.get<any>(this.standardapiUrl);
  }

  addStudentDetails(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }

  getStudentDetailsById(studentId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${studentId}`);
  }

  updateStudentDetailsById(studentId: any, updatedStudentDetails: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${studentId}`, updatedStudentDetails);
  }

  deleteStudentDetails(studentId: String): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${studentId}`);
  }
}
