import express from 'express';
import 'dotenv/config.js';
import router from './routes/index.js';
import { sqlConfig } from './config.js';
import sql from 'mssql';
import cors from 'cors';

const PORT = process.env.PORT || 5001;
const app = express();

app.use(
    cors({
        credentials: true,
        origin: '*',
    })
);
app.use(express.json());
app.use('/api', router);

const start = () => {
    try {
        sql.connect(sqlConfig, console.log('DB connected'));
        app.listen(PORT, ['192.168.1.37', 'localhost'], console.log(`Server started on ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
