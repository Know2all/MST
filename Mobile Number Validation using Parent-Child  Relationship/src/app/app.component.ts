import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ost6Component } from "./ost6/ost6.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ost6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mobilenumber';
}
