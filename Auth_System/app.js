import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import userRoutes from './routers/UserRoutes.js'

const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
}

app.use(express.json());
app.use(cors(corsOptions));

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch (e) {
    console.log(e);
}

app.use('/user', userRoutes);