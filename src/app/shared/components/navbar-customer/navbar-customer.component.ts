import { RegisteredComponent } from './../../../pages/customer/registered/registered.component';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar-customer.component.html',
  styleUrl: './navbar-customer.component.css'
})
export class NavbarCustomerComponent {
  private authService =inject(AuthService);
  private router=inject(Router);

  constructor() {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
