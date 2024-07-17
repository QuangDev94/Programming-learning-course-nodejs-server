import express, { Request } from "express";
export const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
require("dotenv").config();

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie paser
app.use(cookieParser());

// cors: cross origin resource sharing
// Allow this domain origin access to server
app.use(
  cors({
    origin: process.env.ORIGIN,
  }),
);

// Test
app.get("/test", (req: Request, res, next) => {
  res.status(200).json({
    success: true,
    message: "API Working",
  });
});

app.all("*", (req, res, next) => {
  console.log(req);
  const err = new Error(`Route ${req.originalUrl} not found`);
  next(err);
});
