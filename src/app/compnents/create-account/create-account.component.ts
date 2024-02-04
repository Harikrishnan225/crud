import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  providers: [AuthService]
})
export class CreateAccountComponent implements OnInit {
  signupForm!: FormGroup
  email: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  onSignupFormSubmit() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;

      this.authService.registerStudent(email, password).subscribe({
        next: (res) => { console.log(res) },
        error: (err) => { console.log(err) }
      });
      // this.router.navigateByUrl('/login');
    }
  }
}