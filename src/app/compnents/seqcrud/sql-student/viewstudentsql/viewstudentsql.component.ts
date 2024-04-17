import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SeqStudentService } from 'src/app/services/seq-student/seq-student.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/compnents/commoncomponents/button/button.component';
import { EmptyscreenComponent } from 'src/app/compnents/commoncomponents/emptyscreen/emptyscreen.component';
import { ConfirmationDialogComponent } from 'src/app/compnents/commoncomponents/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-viewstudentsql',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, EmptyscreenComponent, ReactiveFormsModule, MatDialogModule],
  templateUrl: './viewstudentsql.component.html',
  styleUrls: ['./viewstudentsql.component.scss']
})
export class ViewstudentsqlComponent implements OnInit {
  studentData: any;
  nostudentData: boolean = false;
  studentBtnName = "studentcomponent"
  students = "student"

  constructor(
    private seqStudentService: SeqStudentService,
    private toaster: ToasterService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.seqStudentService.readStudent().subscribe((data: any) => {
      this.studentData = data;
      this.nostudentData = this.studentData.length === 0;
    }, (err: any) => {
      console.log('Error fetching student', err);
    })
  }

  addsqlstudent() {
    this.router.navigateByUrl('/studentsql/add');
  }

  deleteItem(studentid: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: ''
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.seqStudentService.deleteStudent(studentid).subscribe(() => {
          this.toaster.success('Student Deleted Successfully');
          this.ngOnInit();
        }, err => {
          this.toaster.error(err);
        })
      }
    })
  }

}