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
    const file = filesService.getFileByPublicKey(publicKey);
    if (file) {
        res.download(file.path, file.name, (err) => {
            if (err) {
                res.status(500).json({ message: "File could not be downloaded" });
            }
        });
    } else {
        res.status(404).json({ message: "File not found" });
    }
}

module.exports = {
    handleFileUpload,
    handleFileDownload
};

