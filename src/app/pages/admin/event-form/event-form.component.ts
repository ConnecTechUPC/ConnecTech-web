import { Component, inject } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../core/services/event.service';

import { Event } from '../../../shared/models/event.model';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
  ],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent  {
  eventForm!: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private eventService = inject(EventService);


  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      ponente: ['', Validators.required],
      day: [''],
      hour: [''],
      location: ['']
    });
  }


  controlHasError(control: string, error: string): boolean {
    return (
      this.eventForm.controls[control].hasError(error) &&
      this.eventForm.controls[control].touched
    );
  }

  onSubmit(): void {
    const event: Event = {
      ...this.eventForm.value,
    };

    this.eventService.addEvent(event);
    this.router.navigate(['/admin/events']);
  }

  cancel(): void {
    this.router.navigate(['/admin/events']);
  }
}
