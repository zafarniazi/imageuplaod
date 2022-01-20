const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

let upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
      // randomBytes function will generate a random name
      let customFileName = crypto.randomBytes(18).toString("hex");
      // get file extension from original file name
      let fileExtension = path.extname(file.originalname).split(".")[1];
      cb(null, customFileName + "." + fileExtension);
    },
  }),
});
module.exports = upload;
