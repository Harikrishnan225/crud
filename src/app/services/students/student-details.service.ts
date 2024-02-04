import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }

  updateStudent(studentId: any, updatedStudentDetails: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${studentId}`, updatedStudentDetails);
  }

  deleteStudent(studentId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${studentId}`);
  }
}
