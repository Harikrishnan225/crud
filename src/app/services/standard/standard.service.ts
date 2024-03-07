import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  apiUrl = 'http://localhost:3000/standard'
  constructor(
    private http: HttpClient
  ) { }

  getStandard(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addStandard(standardData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, standardData);
  }

  getStandardDetailsById(standardId: any) {
    return this.http.get<any>(`${this.apiUrl}/${standardId}`);
  }

  getStandardByUniqueId(standardId: any) {
    return this.http.get<any>(`${this.apiUrl}/${standardId}`);
  }

  updatedStandard(standardId: any, updatedStandardData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${standardId}`, updatedStandardData)
  }

  deleteStandard(standardId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${standardId}`);
  }
}
