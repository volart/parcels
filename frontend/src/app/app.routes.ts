import { Routes } from '@angular/router';
import { InsertParcelFormComponent } from './insert-parcel-form/insert-parcel-form.component';
import { ParcelsListComponent } from './parcels-list/parcels-list.component';

export const routes: Routes = [
  {
    path: 'insert_parcel',
    component: InsertParcelFormComponent,
    title: 'Insert Parcel Form',
  },
  {
    path: 'parcels_list',
    component: ParcelsListComponent,
    title: 'Parcels List',
  },
];
