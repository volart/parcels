// Example: users.routes.ts
import express, { Router } from 'express';
import { createParcel } from '../controllers/parcels.controller';

const router: Router = express.Router();

router.post('/', createParcel);

export default router;
