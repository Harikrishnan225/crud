import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { StudentDetailsService } from '../../services/students/student-details.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    StudentDetailsService,
    LoginService
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailorphonenumber!: string;
  password!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailorphonenumber: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.loginForm.valueChanges.subscribe((formValues) => {
      this.emailorphonenumber = formValues.email;
      this.password = formValues.password;
    });
  }

  onLoginFormSubmit() {
    this.loginService.login(this.loginForm.value.emailorphonenumber, this.loginForm.value.password).subscribe((response) => {
      console.log('Token:', response.token);
    });
  }

}
