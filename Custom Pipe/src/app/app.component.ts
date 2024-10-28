import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedDate: Date = new Date();
  startOfWeek: Date = new Date(); // Initialize with a default value
  endOfTheWeek: Date = new Date(); // Initialize with a default value

  constructor() {
    this.updateWeek();
  }

  updateWeek() {
    const currentDate = new Date(this.selectedDate);
    const dayOfWeek = currentDate.getDay(); // Get the day of the week (0-6)

    // Calculate the start and end of the week (assuming week starts on Sunday)
    this.startOfWeek = new Date(currentDate);
    this.startOfWeek.setDate(currentDate.getDate() - dayOfWeek); // Sunday

    this.endOfTheWeek = new Date(this.startOfWeek);
    this.endOfTheWeek.setDate(this.startOfWeek.getDate() + 6); // Saturday
  }
}
