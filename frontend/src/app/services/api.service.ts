import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Parcel } from '../models/parcel.model';
import { Parcels } from '../models/parcels.model';

const api_url = 'http://localhost:3000/api';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  insertParcel(parcel: Parcel, next: (response: any) => void) {
    const url = api_url + '/parcel';
    this.http.post(url, parcel).subscribe({
      next: next,
      error: (error) => {
        console.error('Error duering inserting parcel:', error);
      },
    });
  }

  getParcels(country: string, description: string, next: (response: object) => void) {
    const url = api_url + '/parcels';

    let params = new HttpParams();
    if (country) {
      params = params.set('country', country);
    }

    if (description) {
      params = params.set('description', description);
    }

    this.http.get(url, { params }).subscribe({
      next: next,
      error: (error) => {
        console.error('Error duering receiveing parcels:', error);
      },
    });
  }
}
