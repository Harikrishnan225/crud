import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/compnents/confirmation-dialog/confirmation-dialog.component';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { EmptyscreenComponent } from 'src/app/emptyscreen/emptyscreen.component';
import { ButtonComponent } from 'src/app/button/button.component';

@Component({
  selector: 'app-teacherview',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDialogModule,
    EmptyscreenComponent,
    ButtonComponent
  ],
  templateUrl: './teacherview.component.html',
  styleUrls: ['./teacherview.component.scss']
})
export class TeacherviewComponent implements OnInit {
  teachersData: any;
  noTeachersData!: boolean;
  teacheres = "Teachers Component";
  teacherBtnName = "Add Teacher";

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
        if (Object.keys(teachers).length === 0) {
          this.noTeachersData = true
        } else {
          this.teachersData = teachers;
        }
      }, error => {
        this.toaster.error('Cannot fetch data ' + error.name);
      });
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
