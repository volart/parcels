import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-parcel-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './insert-parcel-form.component.html',
  styleUrl: './insert-parcel-form.component.css'
})
export class InsertParcelFormComponent implements OnInit {

  insertParcelForm!: FormGroup;


  ngOnInit(): void {
    // TODO: Add duplicateSKUVaidator for checking if parcel sku is duplicated
    this.insertParcelForm = new FormGroup({
      // Stock keeping unit
      parcelSKU: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      streetAddress: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      deliveryDate: new FormControl('', Validators.required),
    });
  }

  // TODO: Add logic to check if this sku is a duplicate
  duplicateSKUVaidator(sku: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return null;
    };
  }

   // Sending data to the server
   onSubmit() {
    if (this.insertParcelForm.valid) {

    }
  }
}