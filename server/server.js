import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Cards from "./models/dbCards.js";

// app config
const app = express();
const port = process.env.PORT || 8000;
dotenv.config();

// middlewares

// database config
mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('succesfully connected to the database');
    })
    .catch((err) => {
        console.log(err);
    });


app.get('/', (req,res) =>{
    res.send('<h1>hello programmer!</h1>')
} )

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})