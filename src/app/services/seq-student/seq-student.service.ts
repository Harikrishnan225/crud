import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeqStudentService {

  private apiUrl = 'http://localhost:3000/studentsseq';
  private standardapiUrl = 'http://localhost:3000/standardseq';

  constructor(
    private http: HttpClient
  ) { }

  createStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }

  readStudent(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getStudentDataById(studentId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${studentId}`);
  }

  updateStudent(studentId: number, updateStudentData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${studentId}`, updateStudentData);
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${studentId}`);
  }

  getDropDownData(): Observable<any> {
    return this.http.get<any>(this.standardapiUrl)
  }
}