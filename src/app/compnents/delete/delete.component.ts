import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
 import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatSnackBarModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  providers: [StudentDetailsService]
})
export class DeleteComponent implements OnInit {
  studentId: any;
  showConfirmation = false;

  constructor(
    private dialog: MatDialog,
    private studentDetailsService: StudentDetailsService,
    private activatedRouter: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(studentData => {
      this.studentId = studentData
    })
  }

  deleteItem(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: 'Are you sure you want to delete this item?'
    });

    // openConfirmationDialog(studentId: string): void {
    //   const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    //     if (confirmed) {
    //       this.studentDetails.deleteStudentDetails(studentId).subscribe(
    //         () => {
    //           console.log('Student deleted successfully');
    //           this.ngOnInit();
    //         },
    //         error => {
    //           console.error(error);
    //         }
    //       );
    //     }
    //   });
    // }

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentDetailsService.deleteStudentDetails(this.studentId).subscribe(
          () => {
            console.log('Student deleted successfully');
          }, error => {
            console.error(error);
          });
      }
    });
  }
  
}
