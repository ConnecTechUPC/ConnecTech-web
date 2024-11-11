import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventCardComponent } from '../../../shared/components/event-card/event-card.component';
import { EventService } from '../../../core/services/event.service';
import { Event } from '../../../shared/models/event.model';

@Component({
  selector: 'app-event-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, EventCardComponent],
  templateUrl: './event-catalog.component.html',
  styleUrls: ['./event-catalog.component.css'],
})
export class EventCatalogComponent {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchQuery: string = '';

  private eventService = inject(EventService);

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events = this.eventService.getEvents();
    this.filteredEvents = [...this.events];
  }

  filterEvents(): void {
    this.filteredEvents = this.events.filter(event =>
      event.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.ponente.toLowerCase().includes(this.searchQuery.toLowerCase()) 
    );
  }
  
}
