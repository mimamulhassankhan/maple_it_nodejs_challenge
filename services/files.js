const fs = require('fs');

class FilesService {
    constructor() {
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
    }

    getFile(id) {
        return this.files.find(file => file.id === id);
    }

    updateFile(id, data) {
        const index = this.files.findIndex(file => file.id === id);
        if (index !== -1) {
            this.files[index] = { ...this.files[index], ...data };
        } else {
            throw new Error("File not found");
        }
    }

    deleteFile(id) {
        const file = this.files.find(file => file.id === id);
        if (file) {
            try {
                fs.unlinkSync(file.path);
                this.files = this.files.filter(file => file.id !== id);
            } catch (err) {
                throw new Error("File could not be deleted");
            }
        } else {
            throw new Error("");
        }
    }
}

module.exports = new FilesService();