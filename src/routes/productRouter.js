import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.post('', productController);

export default router;