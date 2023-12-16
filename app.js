import express from "express";
import dotenv from "dotenv";

import db from "./config/database.js";
import router from "./routes/index.js";

const app = express();
dotenv.config();

app.use(express.static(`public`));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db();
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Sunucu ${process.env.PORT} portunda başlatıldı..`);
});
