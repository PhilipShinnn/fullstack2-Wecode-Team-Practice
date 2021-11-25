import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.post('/signup', userController);
router.post('/login', userController);

export default router;