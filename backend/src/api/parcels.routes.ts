import express, { Router, Request, Response } from 'express';
import { filterBy, filterByCountry, filterByDescription, getAllParcels } from '../controllers/parcels.controller';
import { ParcelsResponse } from '../types/parcels.response';

const router: Router = express.Router();

interface GetParcelsParams {
    country?: string;
    description?: string;
  }

router.get('/', async (req: Request, res: Response<ParcelsResponse>) => {
    const { country, description } = req.query as GetParcelsParams;

    if (country && !description) {
        res.json(await filterByCountry(country))
    } else if(description && !country) {
        res.json( await filterByDescription(description))
    } else if(country && description) {
        res.json( await filterBy(country, description))
    } else {
        res.json( await getAllParcels())
    }
  });

export default router;
