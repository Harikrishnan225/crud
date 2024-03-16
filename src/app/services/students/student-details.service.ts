import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  private apiUrl = 'http://localhost:3000/students';
  private studentapiUrl = 'http://localhost:3000/studentdetails';
  private standardapiUrl = 'http://localhost:3000/standards';

  constructor(private http: HttpClient) { }

  getStudentsData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStandards(): Observable<any> {
    return this.http.get<any>(this.standardapiUrl);
  }

  addStudentData(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }

  getStudentDataById(studentId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${studentId}`);
  }

  updateStudentDataById(studentId: any, updatedStudentDetails: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${studentId}`, updatedStudentDetails);
  }

  deleteStudentData(studentId: String): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${studentId}`);
  }

  addStudentDetails(studentDetailsData: any): Observable<any> {
    return this.http.post<any>(this.studentapiUrl, studentDetailsData)
  }

  getStudentDetails(): Observable<any> {
    return this.http.get<any>(this.studentapiUrl)
  }

}
