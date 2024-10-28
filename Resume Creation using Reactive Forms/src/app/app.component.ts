import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentView: string = 'regView1';
  personalDetailsForm: FormGroup;
  educationDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.personalDetailsForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0), Validators.max(150)]],
      qualification: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required]
    });

    this.educationDetailsForm = this.formBuilder.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      graduationYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      Percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      ProjectDescription: ['', Validators.required],
      ProjectTitle: ['', Validators.required],
    });

  }

  navigateTo(view: string) {
    this.currentView = view;
  }
  onsubmit() {
    if (this.educationDetailsForm.valid) {
      this.navigateTo('regView3');
    }
    else {
      this.educationDetailsForm.markAllAsTouched();
    }
  }
  onsubmit1() {
    if (this.personalDetailsForm.valid) {
      this.navigateTo('regView2');
    } else {
      this.personalDetailsForm.markAllAsTouched();
    }
  }

  downloadPDF() {
    const pdf = new jsPDF();
    const data = document.getElementById('resumePreview');

    if (data) {
      html2canvas(data).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('resume.pdf');
      });
    } else {
      console.error('Element with ID "resumePreview" not found');
    }
  }
}

