//Package imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//File or component imports
import apiV1Router from './routes/api/v1/index.js';

//configuring dotenv to load the environment variables from .env file
dotenv.config();


//Initialize the application to create an instance
const app = express('');

app.use(bodyParser.json({
    limit: "30mb",
    extended: true,
}));
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
    parameterLimit : 50000
}))
app.use(cors());
app.use(express.json({
    limit: "30mb",
}))


//MongoDb connection
mongoose.connect(process.env.CONNECTION_URL, {
    //To avoid console warnings we could have provided options but are no longer required here
}).then(() => { //If the connection is successful
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port: ${process.env.PORT}`);
    })
}).catch((error) => {
    console.error(`Error connecting to Mongoose: ${error.message}`);
});


//Routes handling
app.use('/api/v1', apiV1Router);