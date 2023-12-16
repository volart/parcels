import {
  getParcelsByCountry,
  getParcelsByDescription,
  getParcelsBy,
  getParcels,
} from "../models/db";
import { toParcelsResponse } from "../utils/parcels.utils";
import { ParcelsResponse } from "../types/parcels.response";

export const filterByCountry = async (
  country: string
): Promise<ParcelsResponse> => {
  const parcels = await getParcelsByCountry(country);

  return toParcelsResponse(parcels);
};

export const filterByDescription = async (
  description: string
): Promise<ParcelsResponse> => {
  const parcels = await getParcelsByDescription(description);

  return toParcelsResponse(parcels);
};

export const filterBy = async (
  country: string,
  description: string
): Promise<ParcelsResponse> => {
  const parcels = await getParcelsBy(country, description);

  return toParcelsResponse(parcels);
};

export const getAllParcels = async (): Promise<ParcelsResponse> => {
  const parcels = await getParcels();

  return toParcelsResponse(parcels);
};
