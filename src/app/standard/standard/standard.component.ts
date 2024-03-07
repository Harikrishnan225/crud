import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StandardService } from 'src/app/services/standard/standard.service';
import { ConfirmationDialogComponent } from 'src/app/compnents/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-standard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatDialogModule],
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss'],
  providers: [StandardService]
})
export class StandardComponent implements OnInit {
  standardId: any;
  standardDetails: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private standardService: StandardService
  ) { }
  ngOnInit(): void {
    this.getStandardData();
  }

  addStandard() {
    this.router.navigateByUrl('/standard/add');
  }

  getStandardData() {
    this.standardService.getStandard().subscribe(result => {
      console.log(result);
      this.standardDetails = result;
    }, err => {
      console.log(err);
    })
  }

  deleteItem(standardId: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: ''
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.standardService.deleteStandard(standardId).subscribe(
          () => {
            console.log('Standard Deleted Successfully');
            this.ngOnInit();
          }, error => {
            console.log(error);
          }
        )
      }
    })
  }
}