import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private toaster: ToasterService
  ) { }

  userLogout() {
    const userLog = localStorage.clear();
    if (userLog == null) {
      this.toaster.success('User Logout Successful');
      this.router.navigateByUrl('/login');
    }
  }
}
