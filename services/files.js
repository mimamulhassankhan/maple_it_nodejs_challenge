class FilesService {
    constructor() {
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
        console.log(this.files)
    }

    getFileByPublicKey(publicKey) {
        return this.files.find(file => file.publicKey === publicKey);
    }

    deleteFilePrivateKey(privateKey) {
        this.files = this.files.filter(file => file.privateKey !== privateKey);
    }
}

module.exports = new FilesService();