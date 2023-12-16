import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parcel } from '../models/parcel.model';

const api_url = 'http://localhost:3000/api';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  insertParcel(parcel: Parcel, next: (value: any) => void) {
    const url = api_url + '/parcel';
    this.http.post(url, parcel).subscribe({
      next: next,
      error: (error) => {
        console.error('Error duering inserting parcel:', error);
      },
    });
  }
}
