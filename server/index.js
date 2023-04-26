import express from 'express';
import 'dotenv/config.js';
import router from './routes/index.js';
import { sqlConfig } from './config.js';
import sql from 'mssql';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.CORS_ORIGIN,
    })
);
app.use(express.json());
app.use('/api', router);

const start = () => {
    try {
        sql.connect(sqlConfig, console.log('DB connected'));
        app.listen(PORT, process.env.ADDRESS, console.log(`Server started on ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
