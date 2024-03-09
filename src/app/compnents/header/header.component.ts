import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToasterComponent } from '../toaster/toaster.component';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ToasterService]
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
