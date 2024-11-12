import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Event } from '../../../shared/models/event.model';
import { EventService } from '../../../core/services/event.service';


@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: Event | null = null;
  private route = inject(ActivatedRoute);
  private eventService = inject(EventService);
  private router = inject(Router);

  ngOnInit(): void {
    const eventID = Number(this.route.snapshot.paramMap.get('id'));

    if (eventID) {
      this.event = this.eventService.getEventID(eventID);
    }
  }

  goBack(): void {
    this.router.navigate(['/customer/catalog']);
  }
  inscPagar(): void {
    this.router.navigate(['/customer/inscribe-form']);
  }
  votar(): void {
    this.router.navigate(['/customer/voting']);
  }

}