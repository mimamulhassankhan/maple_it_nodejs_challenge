class CryptoService {
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
    validateKey(key, type = "public") {
        const regex = new RegExp(`^${type}_key__\\d+__${this.secret}$`);
        return regex.test(key);
    }

    // key to id, can be public or private
    keyToId(key) {
        const regex = new RegExp(`^.*__(\\d+)__${this.secret}$`);
        const match = key.match(regex);
        return match ? +match[1] : null;
    }
}

module.exports = new CryptoService();