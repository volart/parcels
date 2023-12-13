import { AppDataSource } from "./data-source";
import { ParcelEntity } from "./parcel.entity";

export const saveParcel = async (parcel: ParcelEntity): Promise<ParcelEntity> => {
  await AppDataSource.manager.save(parcel);
  return parcel;
};
