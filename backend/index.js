import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './route/authRoute.js';
import userRouter from './route/userRoute.js';
import contentRouter from './route/contentRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// ✅ CORS should be before routes
app.use(
  cors({
    origin: ["https://ytube-frontend.onrender.com"], // your deployed frontend
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ Add a small fix for preflight requests
app.options("*", cors());

// ✅ Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/content", contentRouter);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello from Server for https://ytube-backend.onrender.com/");
});

// ✅ Start server after DB connection
app.listen(port, async () => {
  await connectDb();
  console.log(`✅ Server started on port ${port}`);
});
