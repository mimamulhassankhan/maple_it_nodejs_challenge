const { errorNames } = require("../config/constants");
const ApiError = require("../lib/ApiError");
const FileModel = require("../models/file");
const commonService = require("../services/common");
const cryptoService = require("../services/crypto");
const filesService = require("../services/files");
const idGenerator = commonService.generateId();


function handleFileUpload(req, res) {
    const { filename, size, mimetype, path, encoding } = req.file;
    const file_id = idGenerator.next().value;
    const cryptos = cryptoService.generateKeyPair(file_id);
    const file = new FileModel(file_id, filename, path, mimetype, encoding, size, cryptos.publicKey, cryptos.privateKey);
    filesService.addFile(file);
    res.json({ message: "File uploaded successfully", data: cryptos });
}

function handleFileDownload(req, res) {
    const publicKey = req.params.publicKey;
    const file_id = cryptoService.keyToId(publicKey);
    const file = filesService.getFile(file_id);
    
    // res.download ended up calling stream.pipe(res) under the hood
    res.download(file.path, file.name, (err) => {
        if (err) {
            throw new ApiError(errorNames.BAD_REQUEST_ERROR, "File could not be downloaded");
        }
    });
    filesService.updateFile(file.id, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) });
}

function handleFileDelete(req, res) {
    const privateKey = req.params.privateKey;
    const file_id = cryptoService.keyToId(privateKey);
    filesService.deleteFile(file_id);
    res.json({ message: "File deleted successfully" });
}

module.exports = {
    handleFileUpload,
    handleFileDownload,
    handleFileDelete
};

