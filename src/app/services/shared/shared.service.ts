import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedStudentSource = new BehaviorSubject<any>(null);
  constructor() { }

  selectedStudent$ = this.selectedStudentSource.asObservable();

  setSelectedStudent(student: any) {
    this.selectedStudentSource.next(student);
  }
}
