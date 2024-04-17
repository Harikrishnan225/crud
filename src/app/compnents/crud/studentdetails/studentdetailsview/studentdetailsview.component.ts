import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { ButtonComponent } from 'src/app/compnents/commoncomponents/button/button.component';
import { EmptyscreenComponent } from 'src/app/compnents/commoncomponents/emptyscreen/emptyscreen.component';
import { ConfirmationDialogComponent } from 'src/app/compnents/commoncomponents/confirmation-dialog/confirmation-dialog.component';

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
