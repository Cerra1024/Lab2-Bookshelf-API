require("dotenv").config();

const express = require("express");
const db = require("./db/connection");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Digital Bookshelf API is running");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
