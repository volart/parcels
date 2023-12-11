import { Request, Response } from "express";
import { ParcelRequest } from "../types/parcel.request";
import { ParcelResponse } from "../types/parcel.response";
import { toParcelEntity, toParcelResponse } from "../utils/parcels.utils";
import { AppDataSource } from "../models/data-source";

export const createParcel = async (
  req: Request<ParcelRequest>,
  res: Response<ParcelResponse>
): Promise<void> => {
  const parcelEnity = toParcelEntity(req.body);

  await AppDataSource.manager.save(parcelEnity);

  const response = toParcelResponse(parcelEnity);

  res.json(response);
};
