import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from './services/login/login.service';
import { TokenService } from './services/token/token.service';
import { HeaderComponent } from './compnents/commoncomponents/header/header.component';
import { FooterComponent } from './compnents/commoncomponents/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud';
  isUserLoggin!: boolean;
  loginService = inject(LoginService);
  tokenService = inject(TokenService);

  ngOnInit(): void {
    this.isUserLoggin = this.loginService.isLogin();
    this.loginService.subject.subscribe(() => {
      this.isUserLoggin = this.loginService.isLogin();
      console.log(this.isUserLoggin);
    })
  }
}
