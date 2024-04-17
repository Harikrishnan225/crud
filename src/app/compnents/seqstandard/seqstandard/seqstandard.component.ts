import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeqstandardService } from 'src/app/services/seqstandard/seqstandard.service';
import { Router, RouterLink } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seqstandard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatDialogModule],
  templateUrl: './seqstandard.component.html',
  styleUrls: ['./seqstandard.component.scss']
})
export class SeqstandardComponent {
  standardDetails: any;

  constructor(
    private seqStandardService: SeqstandardService,
    private router: Router,
    private toaster: ToasterService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getStandardData();
  }

  getStandardData() {
    this.seqStandardService.getStandard().subscribe(result => {
      this.standardDetails = result;
      console.log(result);   
    }, err => {
      this.toaster.error(err);
    })
  }

  addStandard() {
    this.router.navigateByUrl('/seqstandard/add');
  }

  deleteItem(standardid: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: ''
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.seqStandardService.deleteStandard(standardid).subscribe(() => {
          this.toaster.success('Standard Delete Successfully');
          this.ngOnInit();
        }, error => {
          this.toaster.error(error.error);
        })
      }
    })
  }
}
