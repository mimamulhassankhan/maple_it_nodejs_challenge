const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        // original name with extension
        cb(null, file.originalname + "-" + Date.now() + path.extname(file.originalname));
    },
});

module.exports = storage;