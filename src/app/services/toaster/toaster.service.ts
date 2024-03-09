import { Injectable } from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';
import { ToasterComponent } from 'src/app/compnents/toaster/toaster.component';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(
    private snackBar: MatSnackBar
  ) { }

  success(toasterContent: any): void {
    this.snackBar.openFromComponent(ToasterComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['transparent-snackbar'],
      data: {
        toasterSuccess: true,
        toasterContent: toasterContent
      }
    });
  }

  error(toasterContent: string): void {
    this.snackBar.openFromComponent(ToasterComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['transparent-snackbar'],
      data: {
        toasterSuccess: false,
        toasterContent: toasterContent
      }
    });
  }

}
