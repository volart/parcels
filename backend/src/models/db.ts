import { dataSource } from "./DataSource";
import { ParcelEntity } from "./parcel.entity";

const parcelRepository = dataSource.getRepository(ParcelEntity);

export const saveParcel = async (
  parcel: ParcelEntity
): Promise<ParcelEntity> => {
  parcelRepository.save(parcel);
  await parcelRepository.save(parcel);
  return parcel;
};

export const getParcelsByCountry = async (country: string) => {
  const parcelsByCountry = await parcelRepository
    .createQueryBuilder("parcel")
    // we allow to write first letters of a country to make it easier for a user(ex. Est will be matched to Estonia)
    .where("parcel.country like :country", { country: `${country}%` })
    .getMany();

  return parcelsByCountry;
};

export const getParcelsByDescription = async (description: string) => {
  const parcelsByDescription = await parcelRepository
    .createQueryBuilder("parcel")
    // we allow to use not full description in order to get parcels since it can be to long to print
    .where("parcel.description like :description", {
      description: `%${description}%`,
    })
    .getMany();
  return parcelsByDescription;
};

export const getParcelsBy = async (country: string, description: string) => {
  const parcelsByDescription = await parcelRepository
    .createQueryBuilder("parcel")
    .where(
      "parcel.country like :country and parcel.description like :description",
      {
        country: `${country}%`,
        description: `%${description}%`,
      }
    )
    .getMany();
  return parcelsByDescription;
};

//TODO: As a next iteration we should implement pagination
//to improve user expirince(it can speed up the process in we have many parcels in our query result),
// besides that increas system resilience
export const getAllParcels = async () => {
  const parcels = await parcelRepository.createQueryBuilder("parcel").getMany()
  return parcels;
};
