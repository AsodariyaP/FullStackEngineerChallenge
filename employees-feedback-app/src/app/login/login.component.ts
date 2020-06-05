import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.status === 'VALID') {
      const user = this.loginForm.value;
      console.log(user);
      if (user.userName === 'admin' && user.password === 'admin') {
        this.router.navigate(['/admin/employees']);
      } else if (user.userName === 'employee' && user.password === 'employee') {
        this.router.navigate(['/employee']);
      }
    }
  }
}
