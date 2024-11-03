import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  controlHasError(control:string, error:string){
      return this.loginForm.controls[control].hasError(error);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;

      console.log('Usuario registrado:', user);
      this.showSnackBar('Registro exitoso');
    }
  }
}
