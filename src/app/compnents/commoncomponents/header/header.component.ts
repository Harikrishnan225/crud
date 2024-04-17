import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loginService = inject(LoginService);
  constructor(
    private router: Router,
    private toaster: ToasterService
  ) { }

  userLogout() {
    localStorage.clear();
    this.toaster.success('User Logout Successful');
    this.loginService.subject.next(1);
    this.router.navigateByUrl('/login');
  }
}
