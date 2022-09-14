import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;

  constructor(private authService: AuthService,
              private afAuth: AngularFireAuth,
              private router: Router,
              private fb: FormBuilder,
             )
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

  }

  onLogin() {

    if (!this.loginForm.valid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService.signIn(email, password).then(() => this.router.navigate(['userProfile']));
  }

  // getters for Validation Login Form
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
