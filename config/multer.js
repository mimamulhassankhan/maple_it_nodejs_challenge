const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { appConfig } = require("./constants");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdirSync(appConfig.uploadDir, { recursive: true });
        cb(null, path.join(appConfig.uploadDir));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "__" + file.originalname);
    },
});

module.exports = storage;