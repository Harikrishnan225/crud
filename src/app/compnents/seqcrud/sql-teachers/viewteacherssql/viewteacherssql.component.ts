import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlteachersService } from 'src/app/services/sql-teachers/sqlteachers.service';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/compnents/commoncomponents/button/button.component';
import { EmptyscreenComponent } from 'src/app/compnents/commoncomponents/emptyscreen/emptyscreen.component';
import { ConfirmationDialogComponent } from 'src/app/compnents/commoncomponents/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-viewteacherssql',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, EmptyscreenComponent, RouterLink, MatDialogModule],
  templateUrl: './viewteacherssql.component.html',
  styleUrls: ['./viewteacherssql.component.scss']
})
export class ViewteacherssqlComponent implements OnInit {
  teachersData: any;
  noTeachersData: boolean = false;
  teacheres = "Teachers Component";
  teacherBtnName = "Add Teacher";

  constructor(
    private teacherssqlService: SqlteachersService,
    private router: Router,
    private dialog: MatDialog,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.teacherssqlService.getTeachers().subscribe((data: any) => {
        this.teachersData = data;
        this.noTeachersData = this.teachersData.length === 0;
      },
      (error: any) => {
        console.error('Error fetching teachers:', error);
      }
    );
  }


  addsqlTeachers() {
    this.router.navigateByUrl('/sqlteachers/add')
  }

  deleteItem(teachersid: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: ''
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teacherssqlService.deleteTeachers(teachersid).subscribe(
          () => {
            this.toaster.success('Teachers Data is Deleted Successfully');
            this.ngOnInit();
          }, error => {
            this.toaster.error(error);
          }
        )
      }
    })
  }
}
