const express = require('express');
const multer = require('multer')
const { handleFileUpload, handleFileDownload } = require('../controllers/files');
const storage = require('../config/multer');

const router = express.Router();
const upload = multer({ storage })

router.post('/', upload.single('file'), handleFileUpload);

router.get('/:publicKey', handleFileDownload);


module.exports = router;