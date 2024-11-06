import { Component } from '@angular/core';

import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarAdminComponent } from "../../../shared/components/navbar-admin/navbar-admin.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [NavbarAdminComponent, FooterComponent, RouterOutlet, NavbarAdminComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
