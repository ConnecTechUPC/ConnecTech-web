import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscribe-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterLink,
    MatSelectModule
  ],
  templateUrl: './inscribe-form.component.html',
  styleUrls: ['./inscribe-form.component.css']
})
export class InscribeFormComponent {
  inscribeForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  constructor() {
    this.inscribeForm = this.fb.group({
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  controlHasError(control: string, error: string) {
    return this.inscribeForm.controls[control].hasError(error) && this.inscribeForm.controls[control].touched;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  onSubmit() {
    if (this.inscribeForm.valid) {
      console.log('Payment Info:', this.inscribeForm.value);
      this.showSnackBar('Pago realizado con éxito');
      this.router.navigate(['/success']);
    } else {
      this.showSnackBar('Formulario inválido, por favor revisa los campos');
    }
  }
}
