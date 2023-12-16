import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Parcel } from '../models/parcel.model';


@Component({
  selector: 'app-parcels-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parcels-list.component.html',
  styleUrl: './parcels-list.component.css',
})
export class ParcelsListComponent implements OnInit {
  parcels: Parcel[] = [
    {
      id: "1702672293143-e159c817",
      sku: "ABC-12345-S-BL",
      description: "Small box",
      streetAddress: "Ehte 5",
      town: "Haapsalu",
      country: "Estonia",
      deliveryDate: new Date('2024-07-02')
    },
    {
      id: "1702672293143-e159c817",
      sku: "BCD-23456-M-GR",
      description: "Medium box",
      streetAddress: "Merituulentie 35",
      town: "Espoo",
      country: "Finland",
      deliveryDate: new Date('2024-02-02')
    }
  ];

  filteredParcels: Parcel[] = [];

  countryFilter: string = '';
  descriptionFilter: string = '';

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredParcels = this.parcels
      .filter(parcel =>
        (this.countryFilter ? parcel.country === this.countryFilter : true) &&
        (this.descriptionFilter ? parcel.description.includes(this.descriptionFilter) : true)
      )
      .sort((a, b) => a.country === 'Estonia' ? -1 : a.deliveryDate.getTime() - b.deliveryDate.getTime());
  }
}
