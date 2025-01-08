import express from 'express';
import cors from 'cors';
import 'dotenv/config'

//App Config
const app = express();
const port = process.env.PORT || 8000;

//Middlewares
app.use(express.json());
app.use(cors());

//API ENDPOINT

app.get('/',(req, res) => {
    res.send('Welcome to our API!');
    });

app.listen(port,(req, res) => {
    console.log(`Server running on port ${port}`);
    });