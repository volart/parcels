import { Request, Response } from "express";
import { countParcelBySku } from "../models/db";

export const checkDuplicate = async (
  req: Request,
  res: Response
): Promise<void> => {
    const sku = req.params.sku;
    const parcelCount = await countParcelBySku(sku)

    if(parcelCount > 0 ) {
        res.json({duplicate: true});
    } else {
        res.json({duplicate: false});
    }
};
