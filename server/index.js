import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/User.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Successfully connected to Mongo DB !!");
})
.catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(3000,()=>{
    console.log("server is running in port on 3000");
})

app.use('/server/user',UserRouter);

// app.get('/test',(req,res)=>{
//     res.json(
//         {message:'Hello world!'}
//     );
// })