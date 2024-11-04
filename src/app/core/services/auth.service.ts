import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { LoginCredentials } from '../../shared/models/login-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    {
      id: 1,
      firstName: 'Ximena',
      lastName: 'Chavarria',
      email: 'admin1@example.com',
      password: '1234567',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'Paul',
      lastName: 'Santiago',
      email: 'customer@example.com',
      password: 'elpepemegapotaxie',
      role: 'CUSTOMER',
    },
  ];

  constructor() { }

  private _currentUser: User | null = null;

  get currentUser(): User | null {
    return this._currentUser;
  }

  register(newUser: User): User | null {
    const existingUser = this.users.find(user => user.email === newUser.email);
    if (existingUser) {
      return null;
    }
    const user: User = {
      ...newUser,
      id: this.users.length + 1,
    };

    this.users.push(user);
    return user;
  }

  login(credentials: LoginCredentials): User | null {
    const user = this.users.find(
      u => u.email === credentials.email && u.password === credentials.password);

    if (user) {
      this._currentUser = user;
      return user;
    }else {
      return null;
    }
  }

  logout(): void {
    this._currentUser = null;
    console.log('Sesión cerrada.');
  }

}
