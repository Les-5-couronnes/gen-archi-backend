import express from "express";
import http from "http";
import health from "./routes/health.js";
import createContact from "./routes/createContact.js";
import deleteContact from "./routes/deleteContact.js";
import getContact from "./routes/getContact.js";
import editContact from "./routes/editContact.js";

export async function init() {
  const app = express();
  const server = http.createServer(app);

  app.use(health);
  app.use(createContact);
  app.use(deleteContact);
  app.use(getContact);
  app.use(editContact);

  return server;
}