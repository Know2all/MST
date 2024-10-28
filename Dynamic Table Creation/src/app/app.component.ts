import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productOptions: string[] = ['Pen', 'Pencil', 'Eraser', 'Scale', 'Pencil box'];
  productList: { product: string, quantity: number }[] = [{ product: '', quantity: 1 }];
  totalQuantity: number = 0;
  submitted: boolean = false;

  addProduct() {
    this.productList.push({ product: '', quantity: 1 });
    this.submitted = false;
  }

  removeItem(index: number) {
    this.productList.splice(index, 1);
    this.updateTotalQuantity();
  }

  submit() {
    if (this.validateSelection()) {
      this.submitted = true;
      this.updateTotalQuantity();
    } else {
      alert("Please ensure all products are selected before submission.");
    }
  }

  private validateSelection(): boolean {
    return this.productList.every(item => item.product !== '');
  }

  private updateTotalQuantity() {
    this.totalQuantity = this.productList.reduce((sum, item) => sum + (item.quantity || 0), 0);
  }
}
