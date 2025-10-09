import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoutes.js';

// Load environment variables from .env file
dotenv.config();

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


app.use(express.json());  // For parsing application/json 
app.use(cors()); 

//API Endpoints

app.use('/api/user', userRouter);
app.get("/", (req, res)=>{
    res.end("Hi, this is working");
})
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter)

app.listen(port, ()=>{
    console.log(`Server is running onport ${port}`);
})

