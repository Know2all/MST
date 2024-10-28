import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe, DecimalPipe, CurrencyPipe, JsonPipe, LowerCasePipe, DatePipe, PercentPipe, SlicePipe, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pipename: string = '1';
  clicked: boolean = false;
  input: any;
  slicecount: string = '1';

  upperCasePipe = new UpperCasePipe();
  lowerCasePipe = new LowerCasePipe();
  decimalPipe = new DecimalPipe('en-US');
  currencyPipe = new CurrencyPipe('en-US');
  jsonPipe = new JsonPipe();
  datePipe = new DatePipe('en-US');
  percentpipe = new PercentPipe('en-US');
  slicePipe = new SlicePipe()


  get transformedInput(): any {
    switch (this.pipename) {
      case '1': return this.upperCasePipe.transform(this.input);
      case '2': return this.lowerCasePipe.transform(this.input);
      case '3': return this.decimalPipe.transform(this.input);
      case '4': return this.jsonPipe.transform(this.input);
      case '5': return this.currencyPipe.transform(this.input);
      case '6': return this.datePipe.transform(this.input);
      case '7': return this.percentpipe.transform(this.input);
      case '8': return this.slicePipe.transform(this.input, Number(this.slicecount));
      default: return this.input;
    }
  }

  convert() {
    this.clicked = true;
  }
  clear() {
    this.input = "";
    this.clicked = false;
  }

}
