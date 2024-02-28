// reserved class File already exists in Node.js, so we need to rename our model to FileModel to avoid conflicts.
class FileModel {
    constructor(id, name, path, type, encoding, size, publicKey, privateKey) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.type = type;
        this.encoding = encoding;
        this.size = size;
        this.publicKey = publicKey || null;
        this.privateKey = privateKey || null;
        this.expires = new Date(Date.now() + 1000 * 60 * 60 * 24);
    }
}

module.exports = FileModel;