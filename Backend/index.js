import express from 'express'
import UserRoute from "./Router/UserRoute.js";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

import cors from "cors";
import connectToMongoDB from "./Config/mongodbServer.js";
const { port } = process.env
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

connectToMongoDB()

       
app.use(cors())

// app.use('/images', express.static(__dirname +'Public'));
app.use('/images', express.static(path.join(__dirname, 'Public')));


app.use('/', UserRoute)

app.listen(port,()=>console.log("Backend Server is Running"))