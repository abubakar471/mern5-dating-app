import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Cards from "./models/dbCards.js";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 8000;
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

// database config
mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    });


// api endpoints
app.get('/', (req, res) => {
    res.send('<h1>hello programmer!</h1>')
});

app.post('/dating/cards', async(req,res) => {
    const dbCard = req.body;
    console.log(dbCard);
    await Cards.create(dbCard)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        })
});

app.get('/dating/cards', async(req,res) => {
    const data =  await Cards.find();
    res.send(data);
})

// listender

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})