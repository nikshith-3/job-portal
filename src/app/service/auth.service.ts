import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<string | null>(null);

  constructor() { }

  // Log in user with username and password
  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next('admin');
      return of(true);
    } else if (username === 'user' && password === 'user123') {
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next('user');
      return of(true);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.currentUserSubject.next(null);
      return of(false);
    }
  }

  // Log out user
  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  // Check if user is authenticated
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Get the current user's role
  getCurrentUser(): Observable<string | null> {
    return this.currentUserSubject.asObservable();
  }


}
