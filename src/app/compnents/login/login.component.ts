import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { StudentDetailsService } from '../../services/students/student-details.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

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
    ToasterService,
    StudentDetailsService,
    LoginService
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginData: any

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toaster: ToasterService,
    private loginService: LoginService,
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginFormSubmit() {
    this.loginService.login(this.loginForm.value).subscribe((result) => {
      this.loginData = result
      if (result) {
        localStorage.setItem('currentUser', JSON.stringify({ token: this.loginData, userName: this.loginData.user }));
      }
      const userLocalData = localStorage.getItem('currentUser');
      if (userLocalData) {
        const currentUser = JSON.parse(userLocalData);
        if (currentUser.token) {
          this.toaster.success('Login Successful');
          this.router.navigateByUrl('/header');
        }
      }
    }, err => {
      console.log(err);
      
      this.toaster.error(err.error.message);
    })
  }

}
