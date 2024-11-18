import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css'
})
export class NavbarAdminComponent {
  private authService =inject(AuthService);
  private router=inject(Router);

  constructor() {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
