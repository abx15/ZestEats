
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import authRouter from './routes/auth.routes.js';
import orderRouter from './routes/order.routes.js';
import userRouter from './routes/user.routes.js';
import restaurantRouter from './routes/restaurant.routes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
});

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

// Make io accessible to our routers
app.set('io', io);

app.use("/api/auth", authRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
app.use("/api/restaurants", restaurantRouter);

io.on('connection', (socket) => {
  console.log('New client connected', socket.id);

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
