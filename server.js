
import express from 'express';
const server = express();

import cors from 'cors';
server.use(cors());

server.use(express.json());
// import {LIST} from './model/list.js'
import routes from './routes/api/list.js'
server.use('/api/list', routes)

// server.use(express.urlencoded({extended:true}))
import { MONGO_URI } from './config.js';
import mongoose from "mongoose";
mongoose.connect(MONGO_URI).then(()=>{console.log('mongodb connected')}).catch(err => {console.log(err);})


const PORT = process.env.PORT|| 5555;
server.listen(PORT,()=>{
    console.log(`the ${PORT} is running`)
})
