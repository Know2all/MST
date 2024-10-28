import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task6';
  id:number=0;
  listId:number=5;
  buttons:any=[];
  submit(){
    this.listId=this.id
    if(this.id===1)
      this.buttons=["Mark","Attendance"]
    else if(this.id===2)
      this.buttons=["Mark","Attendance","Report"]
    else if(this.id===3)
      this.buttons=["Mark","Attendance","Report","Settings"]
    else{
      this.buttons=[]
      this.listId=5
    }
  }
}
