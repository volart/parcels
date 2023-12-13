import { AppDataSource } from "./data-source";
import { ParcelEntity } from "./parcel.entity";

export const saveParcel = (parcel: ParcelEntity): ParcelEntity => {
  AppDataSource.manager.save(parcel);
  return parcel;
};
