import express from "express";
import http from "http";
import mongoose from "mongoose";
import health from "./routes/health.js";
import addContact from "./routes/addContact.js";
import deleteContact from "./routes/deleteContact.js";
import getContact from "./routes/getContact.js";
import editContact from "./routes/editContact.js";

export async function init() {
  const app = express();
  app.use(express.json());
  const server = http.createServer(app);
  mongoose.connect('mongodb://admin:password@75.101.234.69:27017/?authMechanism=DEFAULT', {
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