import express, { Router, Request, Response } from 'express';
import { filterBy, filterByCountry, filterByDescription, getAllParcels } from '../controllers/parcels.controller';

const router: Router = express.Router();

interface GetParcelsParams {
    country?: string;
    description?: string;
  }

router.get('/', (req: Request<GetParcelsParams>, res: Response) => {
    const { country, description } = req.query as GetParcelsParams;

    if (country && !description) {
        return filterByCountry(country)
    } else if(description && !country) {
        return filterByDescription(description)
    } else if(country && description) {
        return filterBy(country, description)
    } else {
        return getAllParcels
    }
  });

export default router;
