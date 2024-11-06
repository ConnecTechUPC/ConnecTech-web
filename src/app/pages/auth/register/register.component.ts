import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router= inject(Router);
  private authService = inject(AuthService);

  constructor() {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      status: ['', [Validators.required]],
      modalidad: ['', [Validators.required]]
    });
  }


  controlHasError(control: string, error: string) {
    return this.registerForm.controls[control].hasError(error) && this.registerForm.controls[control].touched;
  }


  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }


  onSubmit() {
     if (this.registerForm.valid) {
      const newUser: User = {
        id: 0,
        role: 'CUSTOMER',
        ...this.registerForm.value,
      };

      const registeredUser = this.authService.register(newUser);

      if (registeredUser) {
        this.showSnackBar(
          `Registro exitoso, bienvenido ${registeredUser.firstName}`
        );
        this.router.navigate(['/auth/login']);
      } else {
        this.showSnackBar('Error al registrar el usuario');
      }
    }
  }
}

