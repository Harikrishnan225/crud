import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentDetailsService } from '../../services/students/student-details.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, MatDialogModule, MatSnackBarModule
  ],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  studentsData: any;
  studentDeleteData: any;

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
    this.studentDetailsService.getStudentsDetails().subscribe(
      students => {
        this.studentsData = students;
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
        this.studentDetailsService.deleteStudentDetails(id).subscribe(
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
