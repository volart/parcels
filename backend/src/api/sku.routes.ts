import express, { Router } from 'express';
import { checkDuplicate } from '../controllers/sku.controller';

const router: Router = express.Router();

router.get('/:sku/duplicate', checkDuplicate);

export default router;
