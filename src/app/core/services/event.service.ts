import { Injectable } from '@angular/core';
import { Event } from '../../shared/models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // Carga los eventos desde el localStorage o utiliza los eventos predeterminados si no hay datos
  private events: Event[] = this.loadEventsFromStorage();

  constructor() {}

  // Método para cargar los eventos desde localStorage
  private loadEventsFromStorage(): Event[] {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      return JSON.parse(storedEvents); // Si existen, devolverlos
    } else {
      // Si no existen, devolver los eventos predeterminados
      return [
        {
          id: 1,
          name: 'Clean Code Workshop',
          ponente: 'Robert C. Martin',
          day: 'Monday',
          hour: '10:00 AM',
          location: 'Room 101',
        },
        {
          id: 2,
          name: 'The Pragmatic Programmer Seminar',
          ponente: 'Andrew Hunt',
          day: 'Tuesday',
          hour: '2:00 PM',
          location: 'Room 202',
        },
        {
          id: 3,
          name: 'Design Patterns Lecture',
          ponente: 'Erich Gamma',
          day: 'Wednesday',
          hour: '11:00 AM',
          location: 'Room 303',
        },
      ]; // Devolver eventos predeterminados si no hay eventos guardados
    }
  }

  // Guarda los eventos en localStorage
  private saveEventsToStorage(): void {
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  // Calcula el próximo ID disponible
  private nextId = this.events.length > 0 ? Math.max(...this.events.map(e => e.id)) + 1 : 1;

  // Método para agregar un nuevo evento
  addEvent(event: Event): Event {
    event.id = this.nextId++;  // Asigna un nuevo ID
    this.events.push(event);    // Añade el evento al arreglo
    this.saveEventsToStorage(); // Guarda los eventos actualizados en localStorage
    return event;
  }

  // Método para obtener todos los eventos
  getEvents(): Event[] {
    return this.events;
  }

  // Método para obtener un evento por ID
  getEventID(id: number): Event | null {
    return this.events.find(b => b.id === id) ?? null;
  }

  // Método para eliminar un evento por ID
  deleteEvent(id: number): boolean {
    const index = this.events.findIndex(b => b.id === id);
    if (index !== -1) {
      this.events.splice(index, 1); // Elimina el evento del arreglo
      this.saveEventsToStorage(); // Guarda los eventos actualizados en localStorage
      return true;
    }
    return false;
  }
}
