import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster/toaster.service';
import { LoginService } from '../services/login/login.service';
import { TokenService } from '../services/token/token.service';

@Component({
  selector: 'app-common-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss']
})
export class CommonFormComponent {
  loginForm!: FormGroup;
  loginData: any;
  password: any;
  show: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toaster: ToasterService,
    private loginService: LoginService,
    private tokenService: TokenService
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.password = 'password';
  }

  loginFormSubmit() {
    this.loginService.login(this.loginForm.value).subscribe((result) => {
      this.loginData = result
      if (result) {
        this.tokenService.saveToken(this.loginData.token);
        this.loginService.subject.next(1);
      }
      const userToken = this.tokenService.getToken();
      if (userToken) {
        this.toaster.success('Login Successful');
        this.router.navigateByUrl('/teachers');
      }
    }, err => {
      console.log(err);
      this.toaster.error(err.error.message);
    })
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
