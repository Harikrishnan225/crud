import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { EmptyscreenComponent } from 'src/app/emptyscreen/emptyscreen.component';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';

@Component({
  selector: 'app-studentdetailsview',
  standalone: true,
  imports: [CommonModule, ButtonComponent, EmptyscreenComponent, RouterLink],
  templateUrl: './studentdetailsview.component.html',
  styleUrls: ['./studentdetailsview.component.scss']
})
export class StudentdetailsviewComponent implements OnInit {
  student = 'Studentdetails Component'
  btntext = 'Student Details'
  studentDetails: any;

  constructor(
    private router: Router,
    private studentDetailsService: StudentDetailsService
  ) { }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails() {
    this.studentDetailsService.getStudentDetails().subscribe((data) => {
      this.studentDetails = data;
      console.log(data);
    })
  }

  addStudentDetails() {
    this.router.navigateByUrl('/studentdetails/add')
  }

  deleteItem() {

  }
}
