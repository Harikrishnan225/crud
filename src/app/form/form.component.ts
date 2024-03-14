import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../compnents/login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { CommonFormComponent } from '../common-form/common-form.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,LoginComponent,SignupComponent,CommonFormComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

}
