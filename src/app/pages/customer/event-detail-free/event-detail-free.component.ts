import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCustomerComponent } from "../../../shared/components/navbar-customer/navbar-customer.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-event-detail-free',
  standalone: true,
  imports: [CommonModule, NavbarCustomerComponent, FooterComponent],
  templateUrl: './event-detail-free.component.html',
  styleUrls: ['./event-detail-free.component.css']
})

export class EventDetailFreeComponent  {



}
