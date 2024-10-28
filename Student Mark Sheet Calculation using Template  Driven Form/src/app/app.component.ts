import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task10';
  students: any = [];
  data= {
    rollno: "",
    name: "",
    mark1: 0,
    mark2: 0,
    mark3: 0,
    total: 0,
    avg: 0
  };
  submitDetail() {
    this.data.total = (this.data.mark1 + this.data.mark2 + this.data.mark3);
    this.data.avg = Math.floor(this.data.total / 3)
    this.data.rollno=this.data.rollno.toUpperCase()
    this.data.name=this.data.name.toUpperCase()
    this.students.unshift(this.data);
    console.log(this.students)
    alert("Submitted")
    this.data = {
      rollno: "",
      name: "",
      mark1: 0,
      mark2: 0,
      mark3: 0,
      total: 0,
      avg: 0
    }
  }
}
