import { ParcelEntity } from "../models/parcel.entity";
import { ParcelRequest } from "../types/parcel.request";
import { ParcelResponse } from "../types/parcel.response";

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
        id: entity.id
    };
}

