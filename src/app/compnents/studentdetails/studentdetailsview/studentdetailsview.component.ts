import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/compnents/confirmation-dialog/confirmation-dialog.component';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { EmptyscreenComponent } from '../../emptyscreen/emptyscreen.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-studentdetailsview',
  standalone: true,
  imports: [CommonModule, ButtonComponent, EmptyscreenComponent, RouterLink, MatDialogModule],
  templateUrl: './studentdetailsview.component.html',
  styleUrls: ['./studentdetailsview.component.scss']
})
export class StudentdetailsviewComponent implements OnInit {
  student = 'Studentdetails Component'
  btntext = 'Student Details'
  studentDetails: any;
  noStudentDetails!: boolean;

  constructor(
    private router: Router,
    private studentDetailsService: StudentDetailsService,
    private toaster: ToasterService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getStudentDetails()
  }

  getStudentDetails() {
    this.studentDetailsService.getStudentDetails().subscribe(data => {
      if (Object.keys(data).length === 0) {
        this.noStudentDetails = true
      } else {
        this.studentDetails = data;
      }
    })
  }

  addStudentDetails() {
    this.router.navigateByUrl('/studentdetails/add');
  }

  deleteItem(studentId: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: ''
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.studentDetailsService.deleteStudentDetailsId(studentId).subscribe(
          () => {
            this.toaster.success("StudentDetails Successfull");
            this.ngOnInit();
          })
    })

  }
}
