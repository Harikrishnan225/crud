import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeqstandardService {

  private apiUrl = 'http://localhost:3000/seqstandard';

  constructor(
    private http: HttpClient
  ) { }

  getStandard(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getStandardByUniqueId(standardId: any): Observable<any> {
    return this.http.get<any>(this.apiUrl, standardId);
  }

  getStandardById(standardId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${standardId}`)
  }

  createStandard(standardData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, standardData);
  }

  editStandard(standardId: any, updatedStandardData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${standardId}`, updatedStandardData);
  }

  deleteStandard(standardId: any) {
    return this.http.delete(`${this.apiUrl}/${standardId}`);
  }
}
