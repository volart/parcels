import { dataSource } from "./DataSource";
import { ParcelEntity } from "./parcel.entity";

const parcelRepository =  dataSource.getRepository(ParcelEntity)

export const saveParcel = async (parcel: ParcelEntity): Promise<ParcelEntity> => {
  parcelRepository.save(parcel)
  await parcelRepository.save(parcel);
  return parcel;
};
