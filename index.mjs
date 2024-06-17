import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect(process.env.ATLAS_URI);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my API');
})


app.get('/tweets', (req, res) => {
    res.send('test');
})









app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))