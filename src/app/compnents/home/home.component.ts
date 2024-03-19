import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../services/token/token.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../compnents/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isUserLoggin!: boolean;

  userLoggin = inject(TokenService);

  ngOnInit(): void {
    const userToken = this.userLoggin.getToken()
    if (userToken) {
      this.isUserLoggin = true
    } else {
      this.isUserLoggin = false
    }
  }

}
