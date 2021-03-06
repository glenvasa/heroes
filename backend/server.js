import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import characters from "./data/characters.js";
// import connectDB from "./config/db.js";

dotenv.config();

// connectDB();

const app = express();

let allowedOrigins = [
  "https://heroes-villains.netlify.app",
  "http://127.0.0.1:5500",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let message =
          "The CORS policy for this application doesn't allow access from origin " +
          origin;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);

app.get("/", (req, res) => {
  res.json(characters);
});

// app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);