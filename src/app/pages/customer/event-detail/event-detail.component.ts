import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})

export class EventDetailComponent {
  event = {
    id: 'Taller', // Ejemplo de un evento
    name: 'Nombre del Evento',
    description: 'Descripción del evento...'
  };

  constructor(private router: Router) {}

  irAVotacion(eventId: string) {
      this.router.navigate(['/voting', eventId]);
  }
}
