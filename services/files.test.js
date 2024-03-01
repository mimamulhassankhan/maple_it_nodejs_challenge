const filesService = require('./files');

describe('Files service', () => {
    describe('listExpiredFiles', () => {
        it('should return a list of expired files', () => {
            const expiredFiles = filesService.listExpiredFiles();
            expect(expiredFiles).toBeInstanceOf(Array);
        });
    });

    describe('deleteFile', () => {
        it('should delete a file', () => {
            const file = filesService.deleteFile(1);
            expect(file).toBeInstanceOf(Object);
        });
    });
});