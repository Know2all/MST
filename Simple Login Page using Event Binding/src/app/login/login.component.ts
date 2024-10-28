import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  enable:boolean=false
  loginUser() {
    console.log(this.email,this.password)
    if (this.email == "bala@bhs.in" && this.password == "12345678")
      window.open('/dashboard', '_self')
    else
      alert("Invalid user")
  }
  validate(){
    if(this.email!="" && this.password!="")
      this.enable=true
    else
      this.enable=false
  }
}
