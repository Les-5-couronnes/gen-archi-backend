import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import health from "./routes/health.js";
import addContact from "./routes/addContact.js";
import deleteContact from "./routes/deleteContact.js";
import getContact from "./routes/getContact.js";
import editContact from "./routes/editContact.js";
import dotenv from 'dotenv';


export async function init() {
  dotenv.config();
  const app = express();
  app.use(express.json());
  app.use(cors());

  const server = http.createServer(app);

  const mongoDBUri = 'mongodb://'+process.env.MONGO_DB_URI+':27017/contact';
  console.log(mongoDBUri);

  mongoose.connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  app.use(health);
  app.use(addContact);
  app.use(deleteContact);
  app.use(getContact);
  app.use(editContact);

  return server;
}
