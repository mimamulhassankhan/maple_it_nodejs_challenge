const express = require('express');
const multer = require('multer')
const { handleFileUpload, handleFileDownload, handleFileDelete } = require('../controllers/files');
const storage = require('../config/multer');
const isValidKey = require('../middlewares/isValidKey');

const router = express.Router();
const upload = multer({ storage })

router.post('/', upload.single('file'), handleFileUpload);

router.get('/:publicKey', isValidKey('public'), handleFileDownload);

router.delete('/:privateKey', isValidKey('private'), handleFileDelete);




module.exports = router;