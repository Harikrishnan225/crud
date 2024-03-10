import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compnents/header/header.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from './services/login/login.service';

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

  userLoggin = inject(LoginService);

  ngOnInit(): void {
    // const userToken = this.userLoggin.isLogin()
    // if (userToken) {
    //   this.isUserLoggin = true
    // } else {
    //   this.isUserLoggin = false
    // } 
  }

}
