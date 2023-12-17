import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-insert-parcel-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './insert-parcel-form.component.html',
  styleUrl: './insert-parcel-form.component.css',
  providers: [ApiService],
})
export class InsertParcelFormComponent implements OnInit {
  insertParcelForm!: FormGroup;

  private api = inject(ApiService);

  submitPressed = false;

  ngOnInit(): void {
    // TODO: Add duplicateSKUVaidator for checking if parcel sku is duplicated
    this.insertParcelForm = new FormGroup({
      // Stock keeping unit
      parcelSKU: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [this.duplicateSKUVaidator()],
        updateOn: 'blur'
      }),
      description: new FormControl('', Validators.required),
      streetAddress: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      deliveryDate: new FormControl('', Validators.required),
    });

    this.insertParcelForm.valueChanges.subscribe(() => {
      this.submitPressed = false;
    });
  }

  // TODO: Add logic to check if this sku is a duplicate
  duplicateSKUVaidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      return this.api.checkDuplicate(control.value).pipe(
        map(response => {
          return response.duplicate ? { skuDuplicate: true } : null;
        })
      );
    };
  }

  // Sending data to the server
  onSubmit() {
    this.submitPressed = true;
    if (this.insertParcelForm.valid) {
      const formData = this.insertParcelForm.value;
      this.api.insertParcel(formData, (response) => {
        console.log('Data submitted successfully:', response);
        this.insertParcelForm.reset();
      });
    }
  }
}
