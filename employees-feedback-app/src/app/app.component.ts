import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'employees-feedback-app';
  username = '';

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.username = sessionStorage.getItem('username');
  }

  isLoginRoute() {
    return this.router.url === '/';
  }

  logout() {
    sessionStorage.removeItem('username');
  }
}
