class FilesService {
    constructor() {
        this.files = [];
    }

    addFile(file) {
        console.log(this)
        this.files.push({});
    }

    getFiles() {
        return this.files;
    }
}

module.exports = new FilesService();