import { ParcelEntity } from "../models/parcel.entity";
import { ParcelRequest } from "../types/parcel.request";
import { ParcelResponse } from "../types/parcel.response";
import { ParcelsResponse } from "../types/parcels.response";

export const toParcelEntity = (request: ParcelRequest): ParcelEntity => {
  const enity = new ParcelEntity();
  enity.country = request.country;
  enity.deliveryDate = request.deliveryDate;
  enity.description = request.description;
  enity.parcelSKU = request.parcelSKU;
  enity.streetAddress = request.streetAddress;
  enity.town = request.town;
  return enity;
};

export const toParcelResponse = (entity: ParcelEntity): ParcelResponse => {
  return {
    id: entity.id,
    parcelSKU: entity.parcelSKU,
    description: entity.description,
    streetAddress: entity.streetAddress,
    town: entity.town,
    country: entity.country,
    deliveryDate: entity.deliveryDate,
  };
};

export const toParcelsResponse = (entities: ParcelEntity[]): ParcelsResponse => {
  return { parcels: entities.map((entity) => toParcelResponse(entity)) };
};
