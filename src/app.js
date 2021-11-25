import express from 'express';
import router from './routes';
import { errorHandler } from './middleware';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
app.use(errorHandler);

export default app;
