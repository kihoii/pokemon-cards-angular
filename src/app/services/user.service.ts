import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUserRequest } from '../interfaces/AddUserRequest';
import { AUTH_SERVICE } from './helpers';
import { Observable, tap } from 'rxjs';
import { AuthRequest } from '../interfaces/AuthRequest';
import { AuthResponse } from '../interfaces/AuthResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json');
  }

  addUser$(user: AddUserRequest) {
    return this.http.post(AUTH_SERVICE + 'users/sign-up', user, {
      headers: this.headers,
    });
  }

  authUser$(user: AuthRequest) {
    return this.http
      .post<AuthResponse>(AUTH_SERVICE + 'users/login', user, {
        headers: this.headers,
      })
      .pipe(tap(this.setToken));
  }

  setToken(response: AuthResponse) {
    localStorage.setItem('auth-token', response.accessToken);
  }
}
