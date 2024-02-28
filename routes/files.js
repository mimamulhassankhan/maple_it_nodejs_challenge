const express = require('express');
const multer = require('multer')
const { addFile } = require('../controllers/files');
const { storage } = require('../config/multer');

const router = express.Router();
const upload = multer({ storage })

router.post('/', upload.single('file'), addFile);


module.exports = router;