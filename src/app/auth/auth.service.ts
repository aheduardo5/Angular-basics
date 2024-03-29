import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggIn$ = this.loggedIn.asObservable();
  constructor(private router: Router) {}

  logIn(): void {
    this.loggedIn.next(true);
    this.redirectToHome();
  }

  logOut(): void {
    this.loggedIn.next(false);
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(['/']);
  }
}
