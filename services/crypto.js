class CryptoService {
    secret;

    constructor() {
        this.secret = 'supersecret';
    }

    // Generate a fake key pair using file_id
    generateKeyPair(file_id) {
        console.log(this)
        return {
            publicKey: `public_key__${file_id}__`.concat(this.secret),
            privateKey: `private_key__${file_id}__`.concat(this.secret)
        }
    }

    // Validate key
    validateKey(file_id, key, type = "public") {
        return key === `${type}_key__${file_id}__`.concat(this.secret);
    }

}

module.exports = new CryptoService();