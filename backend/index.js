import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import orderRouter from './routes/order.routes.js';
import userRouter from './routes/user.routes.js';
import connectDb from './config/db.js';

dotenv.config();
connectDb();

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

  }
));


app.use("/api/auth", authRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});