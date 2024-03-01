const fs = require('fs');
const ApiError = require('../lib/ApiError');
const { errorNames } = require('../config/constants');

class FilesService {
    constructor() {
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
    }

    getFile(id) {
        const file = this.files.find(file => file.id === id);
        if (file) {
            return file;
        } else {
            throw new ApiError(errorNames.NOT_FOUND_ERROR, 'File not found');
        }
    }

    listExpiredFiles() {
        const currentTime = Date.now();
        return this.files.filter(file => file.expires < currentTime);
    }

    updateFile(id, data) {
        const index = this.files.findIndex(file => file.id === id);
        if (index !== -1) {
            this.files[index] = { ...this.files[index], ...data };
        } else {
            throw new ApiError(errorNames.NOT_FOUND_ERROR, 'File not found');
        }
    }

    deleteFile(id) {
        const file = this.getFile(id);
        if (file) {
            try {
                fs.unlinkSync(file.path);
                this.files = this.files.filter(file => file.id !== id);
            } catch (err) {
                throw new ApiError(errorNames.BAD_REQUEST_ERROR, 'File could not be deleted');
            }
        } else {
            throw new ApiError(errorNames.NOT_FOUND_ERROR, 'File not found');
        }
    }
}

module.exports = new FilesService();