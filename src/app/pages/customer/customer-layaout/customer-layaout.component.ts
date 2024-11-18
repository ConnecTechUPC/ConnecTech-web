import { Component } from '@angular/core';

import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarCustomerComponent } from "../../../shared/components/navbar-customer/navbar-customer.component";

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [NavbarCustomerComponent, FooterComponent, RouterOutlet, NavbarCustomerComponent],
  templateUrl: './customer-layaout.component.html',
  styleUrl: './customer-layaout.component.css'
})
export class CustomerLayoutComponent {

}