import express, { Router } from 'express';
import { createParcel } from '../controllers/parcel.controller';

const router: Router = express.Router();

router.post('/', createParcel);

export default router;
