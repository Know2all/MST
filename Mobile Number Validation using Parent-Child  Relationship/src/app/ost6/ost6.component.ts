import { Component,OnInit } from '@angular/core';
import { Countries } from './country-codes';
import { Ost6ChildComponent } from "../ost6-child/ost6-child.component";

@Component({
  selector: 'app-ost6',
  standalone: true,
  imports: [Ost6ChildComponent],
  templateUrl: './ost6.component.html',
  styleUrl: './ost6.component.css',
  providers:[Countries]
})
export class Ost6Component implements OnInit {
  ngOnInit(): void {}
  mobile: number | string = '@mobile_number';
  getMobile(mobile: number | string) {
    this.mobile = mobile;
  }
}
