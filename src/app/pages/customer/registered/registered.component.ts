import { Component} from '@angular/core';
import { NavbarCustomerComponent } from "../../../shared/components/navbar-customer/navbar-customer.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',

  standalone: true,

  imports: [ NavbarCustomerComponent,CommonModule,  NavbarCustomerComponent,FooterComponent],


  styleUrls: ['./registered.component.css']

})
export class RegisteredComponent{

  constructor() { }



}
