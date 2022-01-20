const express = require("express");
const multer = require("multer");
const upload = require("./multer/multer");
const uploadController = require("./controller/uploadfileController");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/uploadfile", upload.single("myFile"), uploadController);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
