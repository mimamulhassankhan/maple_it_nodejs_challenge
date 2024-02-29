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
    console.log(file_id);
    const file = filesService.getFile(file_id);
    console.log(file);
    if (file) {
        // res.download ended up calling stream.pipe(res) under the hood
        res.download(file.path, file.name, (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "File could not be downloaded" });
            }
        });
        // update expires
        filesService.updateFile(file.id, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) });
        // reshcdule 
    } else {
        res.status(404).json({ message: "File not found" });
    }
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

