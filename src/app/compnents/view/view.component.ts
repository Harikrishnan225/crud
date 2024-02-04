import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [StudentDetailsService]
})
export class ViewComponent {
  items: any[] = [];
  students: any;

  constructor(
    private studentDetails: StudentDetailsService,
    private router: Router,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.studentDetails.getStudents().subscribe({
      next: (data: any[]) => {
        this.items = data;
        console.log(this.items);
      },
      error: (error: any) => {
        console.error('Error fetching student data:', error);
      }
    });
    this.getStudents();
  }

  getStudents(): void {
    this.studentDetails.getStudents().subscribe(
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

  updateStudent(studentId: any) {
    const selectedStudent = this.items.find((item) => item._id === studentId);
    this.sharedService.setSelectedStudent(selectedStudent);
    this.router.navigateByUrl('/edit');
  }

  openConfirmationDialog(studentId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.studentDetails.deleteStudent(studentId).subscribe(
          () => {
            console.log('Student deleted successfully');
            this.ngOnInit();
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }
}
