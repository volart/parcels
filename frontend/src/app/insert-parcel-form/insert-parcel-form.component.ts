import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Observable, map, of } from 'rxjs';

//Material
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

export class InsertParcelFormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-insert-parcel-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './insert-parcel-form.component.html',
  styleUrl: './insert-parcel-form.component.css',
  providers: [ApiService],
})
export class InsertParcelFormComponent implements OnInit {
  insertParcelForm!: FormGroup;

  private api = inject(ApiService);
  matcher = new InsertParcelFormErrorStateMatcher();
  isSubmitted = false;

  ngOnInit(): void {
    this.insertParcelForm = new FormGroup({
      parcelSKU: this.createControl(
        '',
        [Validators.required],
        this.duplicateSKUVaidator()
      ),
      description: this.createControl('', [Validators.required]),
      streetAddress: this.createControl('', [Validators.required]),
      town: this.createControl('', [Validators.required]),
      country: this.createControl('', [Validators.required]),
      deliveryDate: this.createControl('', [
        Validators.required,
        this.deliveryDateFutureValidator(),
      ]),
    });

    this.insertParcelForm.valueChanges.subscribe(() => {
      this.isSubmitted = false;
    });
  }

  duplicateSKUVaidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }
      return this.api.checkDuplicate(control.value).pipe(
        map((response) => {
          return response.duplicate ? { skuDuplicate: true } : null;
        })
      );
    };
  }

  deliveryDateFutureValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return of(null);
      }
      const isPast =
        new Date(control.value).getTime() - new Date().getTime() < 0;
      return isPast ? { past: true } : null;
    };
  }

  // Sending data to the server
  onSubmit() {
    this.isSubmitted = true;
    if (this.insertParcelForm.valid) {
      const formData = this.insertParcelForm.value;
      this.api.insertParcel(formData, (response) => {
        console.log('Data submitted successfully:', response);
        this.insertParcelForm.reset();
      });
    }
  }

  private createControl(
    initialValue: any,
    validators: ValidatorFn | ValidatorFn[],
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[]
  ) {
    return new FormControl(initialValue, {
      validators: validators,
      asyncValidators: asyncValidators,
      updateOn: 'submit',
    });
  }
}
