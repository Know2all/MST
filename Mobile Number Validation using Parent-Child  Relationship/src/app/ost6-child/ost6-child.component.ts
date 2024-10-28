import { Component,EventEmitter,Output } from '@angular/core';
import { Countries } from '../ost6/country-codes';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ost6-child',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './ost6-child.component.html',
  styleUrl: './ost6-child.component.css'
})
export class Ost6ChildComponent {
  @Output() setMobile = new EventEmitter<number | string>();
  mobile!: string;

  for_length: any;
  for_flag: any;

  country_flag: string =
    'https://www.hermes-parkerconcrete.com/wp-content/uploads/2020/11/services-no-image-1536x1152.png';
  country_name: string = 'Country_name';
  contry: string = '@';
  phoneLength: any = {
    min: 'MIN',
    max: 'MAX',
  };
  data: any = {};
  error: boolean = false;
  findData(code: any) {
    if (parseInt(code.value) != -1) {
      this.data = this.for_length[parseInt(code.value)];
      this.country_flag = this.for_flag[this.data.code].image;
      this.country_name = this.for_flag[this.data.code].name;
      this.setPhoneLength();
      return;
    } else {
      this.phoneLength = {
        min: 'MIN',
        max: 'MAX',
      };
      this.contry = '@';
      this.data = {};
      this.setMobile.emit('@mobile_number');
      this.error = false;
      this.country_flag =
        'https://www.hermes-parkerconcrete.com/wp-content/uploads/2020/11/services-no-image-1536x1152.png';
      this.country_name = 'Country_name';
    }
  }
  setPhoneLength() {
    this.contry = this.data.code;
    if (this.data.min) {
      this.phoneLength = {
        min: this.data.min,
        max: this.data.max,
      };
    } else if (typeof this.data.phoneLength == typeof []) {
      this.phoneLength = {
        min: this.data.phoneLength[0],
        max: this.data.phoneLength[this.data.phoneLength.length - 1],
      };
    } else {
      this.phoneLength = {
        min: this.data.phoneLength,
        max: this.data.phoneLength,
      };
    }
    return;
  }
  constructor(public coutries: Countries) {
    this.for_length = coutries.for_mobile_length;
    this.for_flag = coutries.country_codes;
  }
  onSubmit() {
    if (this.phoneLength.min != 'MIN') {
      if (
        this.mobile.toString().length >= this.phoneLength.min &&
        this.mobile.toString().length <= this.phoneLength.max
      ) {
        console.log(this.mobile);
        this.error = false;
        alert('Phone Number: ' + this.mobile);
        this.setMobile.emit(parseInt(this.mobile));
      } else {
        this.error = true;
      }
    } else {
      alert('Select Code First!');
    }
  }
}
