import { Request, Response } from "express";
import { ParcelRequest } from "../types/parcel.request";
import { ParcelResponse } from "../types/parcel.response";
import { toParcelEntity, toParcelResponse } from "../utils/parcels.utils";
import { saveParcel } from "../models/db";


export const createParcel = async (
  req: Request<ParcelRequest>,
  res: Response<ParcelResponse>
): Promise<void> => {
  const parcelEnity = toParcelEntity(req.body);
  const savedParcel = await saveParcel(parcelEnity);
  const response = toParcelResponse(savedParcel);

  res.json(response);
};
