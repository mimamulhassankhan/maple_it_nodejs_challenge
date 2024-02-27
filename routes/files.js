const express = require('express');
const filesService = require('../services/files');
const router = express.Router();

router.post('/', filesService.addFile);


module.exports = router;