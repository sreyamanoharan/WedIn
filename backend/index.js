import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
   methods: ["GET", "POST","PATCH","PUT" ],
   credentials: true,
 }));
 
app.listen(3000,()=>{
    console.log('server is running');
    
})

mongoose.connect("mongodb://localhost:27017/wedding").then((res)=>{
    console.log('mongoDbConnected');
    
})
    


