import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = ''; // New property for success message

  constructor(private http: HttpClient) {}

  onLogin() {
    const loginData = { username: this.username, password: this.password };

    this.http.post('http://localhost:3000/login', loginData).subscribe(
      (response: any) => {
        if (response.success) {
          this.successMessage = 'Login successful!'; // Set success message
          this.errorMessage = ''; // Clear any previous error message
          console.log('Login successful'); // Log to console
        } else {
          this.errorMessage = response.message; // Set error message
          this.successMessage = ''; // Clear any previous success message
        }
      },
      (error) => {
        console.error('Error response from backend:', error); // Log the full error
        this.errorMessage = 'An error occurred. Please try again.'; // User-friendly error message
        this.successMessage = ''; // Clear any previous success message
      }
    );
  }
}
