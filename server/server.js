import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';
import path from 'path';

const PORT = process.env.PORT || 4000;

dotenv.config();

const app = express();

const __dirname = path.resolve();
console.log(__dirname)

const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:3000', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true, // Allow cookies or credentials
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));