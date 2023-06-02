import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from 'axios';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

import cors from "cors"

const corsOptions ={
    origin:'http://localhost:3000', 
}

app.use(cors(corsOptions));
app.use(express.json())

const headers = { 'Authorization': 'Bearer qhtfs87hjnc12kkos' }; 

app.post("/order", async (req: Request, res: Response, next) => {
    try {
        const response = await axios.post("https://integration.api.scalapay.com/v2/orders", req.body, { headers })
        res.send(response.data);
    } catch (err) {
        console.log(err)
        next(err);
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
