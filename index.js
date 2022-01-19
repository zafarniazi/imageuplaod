const express = require("express");
const multer = require("multer");
const upload = require("./multer");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
