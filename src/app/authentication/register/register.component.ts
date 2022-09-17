import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// Match Password and ConfirmPassword Function
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isPlayer: boolean = false;
  isCoach: boolean = false;
  isAgent: boolean = false;

  registerForm: FormGroup | any;

  constructor(private authservice: AuthService,
              private afAuth: AngularFireAuth,
              private router: Router,
              private fb: FormBuilder)
  {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
      },
      { validators: passwordMatchValidator() }
    );
  }

  ngOnInit(): void {

  }

  // Create User Function
  createUser() {

    if (!this.registerForm.valid) {
      return;
    }
    const {email, password} = this.registerForm.value;

    this.authservice.registerUser(email, password).then(user => {
      this.router.navigate(['/login']);
    })
    alert('Registered successfully!')
  }

  // getters for Validation Register Form
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  onPlayerChange(event: any) {
    this.isPlayer = !event.checked;
  }

  onCoachChange(event: any) {
    this.isCoach = !event.checked;
  }

  onAgentChange(event: any) {
    this.isAgent = !event.checked;
  }

}
