const request = require('supertest');
const app = require('../index');
const cryptoService = require('../services/crypto');

describe('Files routes', () => {
    describe('POST /files', () => {
        it('should accept multipart a file and return valid keys', async () => {
            const res = await request(app)
                .post('/files')
                .attach('file', 'test/files/MapleIT_Exam.pdf')
                .expect(200);
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('publicKey');
            expect(res.body.data).toHaveProperty('privateKey');
            expect(cryptoService.validateKey(res.body.data.publicKey, 'public')).toBe(true);
            expect(cryptoService.validateKey(res.body.data.privateKey, 'private')).toBe(true);
        });

        it('should return 400 if no file is uploaded', async () => {
            await request(app)
                .post('/files')
                .expect(400);
        });
    });

    describe('GET /files/:publicKey', () => {
        it('should download a file using valid public key', async () => {
            const key = 'public_key__1__supersecret';
            const res = await request(app)
                .get(`/files/${key}`)
                .expect(200);
            expect(res.header['content-type']).toBe('application/pdf');
            expect
        });

        it('should return 403 if invalid public key is used', async () => {
            const key = 'public_key__1__invalid';
            await request(app)
                .get(`/files/${key}`)
                .expect(403);
        });
    });

    describe('DELETE /files/:privateKey', () => {
        it('should delete a file using valid private key', async () => {
            const key = 'private_key__1__supersecret';
            await request(app)
                .delete(`/files/${key}`)
                .expect(200);
        });

        it('should return 403 if invalid private key is used', async () => {
            const key = 'private_key__1__invalid';
            await request(app)
                .delete(`/files/${key}`)
                .expect(403);
        });
    });
});