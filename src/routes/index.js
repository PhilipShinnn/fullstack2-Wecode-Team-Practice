import express from 'express';
import userRouter from './userRouter';
import productRouter from './productRouter';

const router = express.Router();

router.use('/user', userRouter);
router.use('/product', productRouter);

export default router;
