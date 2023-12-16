import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Parcel } from '../models/parcel.model';
import { ApiService } from '../services/api.service';

//Material
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { Parcels } from '../models/parcels.model';

@Component({
  selector: 'app-parcels-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './parcels-list.component.html',
  styleUrl: './parcels-list.component.css',
  providers: [ApiService],
})
export class ParcelsListComponent implements OnInit {
  private api = inject(ApiService);

  sortedParcels: Parcel[] = [];
  displayedColumns: string[] = [
    'id',
    'parcelSKU',
    'description',
    'streetAddress',
    'town',
    'country',
    'deliveryDate',
  ];

  countryFilter: string = '';
  descriptionFilter: string = '';

  ngOnInit(): void {}

  onSubmit() {
    console.log('countryFilter: ', this.countryFilter);
    this.api.getParcels(
      this.countryFilter,
      this.descriptionFilter,
      (response) => {
        const parcels  = response as Parcels;
        console.log(parcels)
        this.sort(parcels.parcels);
      }
    );
  }

  sort(parcels: Parcel[]) {
    this.sortedParcels = parcels.sort((a, b) =>
      a.country === 'Estonia' ? -1 : new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime()
    );
  }
}
