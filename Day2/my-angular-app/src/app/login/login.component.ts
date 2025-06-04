import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Here you would typically make an API call to authenticate
    if (this.email && this.password) {
      // For demo purposes, we'll just log the credentials
      console.log('Login attempt:', { email: this.email, password: this.password });
      // TODO: Implement actual authentication logic
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
} 