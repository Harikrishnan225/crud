import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { EmptyscreenComponent } from 'src/app/compnents/commoncomponents/emptyscreen/emptyscreen.component';
import { ButtonComponent } from 'src/app/compnents/commoncomponents/button/button.component';
import { ConfirmationDialogComponent } from 'src/app/compnents/commoncomponents/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDialogModule,
    MatSnackBarModule,
    EmptyscreenComponent,
    ButtonComponent
  ],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  studentsData: any;
  studentDeleteData: any;
  studentmsg: any;
  student = "Student Component";
  noStudentData!: boolean;
  btntext = 'Add Student';

  constructor(
    private studentDetailsService: StudentDetailsService,
    private router: Router,
    private dialog: MatDialog,
    private toaster: ToasterService
  ) { }


  ngOnInit(): void {
    this.getStudentsData();
  }

  getStudentsData(): void {
    this.studentDetailsService.getStudentsData().subscribe(
      students => {
        if (Object.keys(students).length == 0) {
          this.noStudentData = true
        } else {
          this.studentsData = students;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  addStudent() {
    this.router.navigateByUrl('/students/add');
  }

  deleteItem(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentDetailsService.deleteStudentData(id).subscribe(
          () => {
            this.toaster.success('Student deleted successfully');
            this.ngOnInit();
          }, error => {
            this.toaster.error(error);
          });
      }
    });
  }

}
