import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
;
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../../core/services/event.service';
import { Event } from '../../../shared/models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent  {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  displayedColumns: string[] = ['name', 'ponente', 'day', 'hour', 'location'];

 
  private eventService = inject(EventService);
  private router = inject(Router);
  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events = this.eventService.getEvents();
    this.filteredEvents = this.events;
    console.log('Eventos cargados:', this.events);  // Verifica que los eventos estén cargando correctamente
  }
  

  filterEvents(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.name.toLowerCase().includes(query)
    );
  }

  deleteEvent(id: number): void {
    const confirmed = confirm('¿Estás seguro de que deseas eliminar este Evento?');
    if (confirmed) {
      const success = this.eventService.deleteEvent(id);
      if (success) {
        this.events = this.events.filter(event => event.id !== id);
        this.filterEvents();
      }
    }
  }

  goToAddEvent(): void {
    this.router.navigate(['admin/events/add']);
  }
}
