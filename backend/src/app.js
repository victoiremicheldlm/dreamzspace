const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const router = require("./router/auth");
const routerApp = require("./router/app");

const app = express();

const dreams = [];

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use("/auth", router);
app.use("/api", routerApp);

app.get("/api/dreams", (req, res) => {
  res.json(dreams);
});

app.post("/api/dreams", (req, res) => {
  const dream = req.body;
  dreams.push(dream);
  res.status(201).send();
});

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
