import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCustomerComponent } from "../../../shared/components/navbar-customer/navbar-customer.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-event-detail-pay',
  standalone: true,
  imports: [CommonModule, NavbarCustomerComponent, FooterComponent],
  templateUrl: './event-detail-pay.component.html',
  styleUrls: ['./event-detail-pay.component.css']
})

export class EventDetailPayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
