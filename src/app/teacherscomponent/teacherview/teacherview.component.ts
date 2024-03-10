import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/compnents/confirmation-dialog/confirmation-dialog.component';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-teacherview',
  standalone: true,
  imports: [CommonModule, RouterLink, MatDialogModule
  ],
  templateUrl: './teacherview.component.html',
  styleUrls: ['./teacherview.component.scss']
})
export class TeacherviewComponent implements OnInit {
  teachersData: any;

  constructor(
    private teachersService: TeachersService,
    private router: Router,
    private dialog: MatDialog,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.getTeachersDetails();
  }

  getTeachersDetails(): void {
    this.teachersService.getTeachersData().subscribe(
      teachers => {
        this.teachersData = teachers;
        console.log(teachers);
      }, error => {
        this.toaster.error('Cannot fetch data' + error);
      }
    )
  }
  addTeachers() {
    this.router.navigateByUrl('/teachers/add');
  }

  deleteItem(teachersId: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: ''
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teachersService.deleteTeachersData(teachersId).subscribe(
          () => {
            this.toaster.success('Teacher Record Deleted Successfully');
            this.ngOnInit();
          }, error => {
            this.toaster.error(error);
          }
        )
      }
    })
  }
}
