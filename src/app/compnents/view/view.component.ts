import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { Router, RouterLink } from '@angular/router';
import { DeleteComponent } from '../delete/delete.component';
;

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DeleteComponent
  ],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [StudentDetailsService]
})
export class ViewComponent {
  items: any;
  students: any;

  constructor(
    private studentDetails: StudentDetailsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.studentDetails.getStudentsDetails().subscribe({
      next: (data: any[]) => {
        this.items = data;
      },
      error: (error: any) => {
        console.error('Error fetching student data:', error);
      }
    });
    this.getStudentsData();
  }

  getStudentsData(): void {
    this.studentDetails.getStudentsDetails().subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.error(error);
      }
    );
  }

  addStudent() {
    this.router.navigateByUrl('/add');
  }

}
