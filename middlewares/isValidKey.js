const { errorNames } = require("../config/constants");
const ApiError = require("../lib/ApiError");
const cryptoService = require("../services/crypto");


const isValidKey = (type) => {
    return (req, res, next) => {
        const key = req.params.publicKey || req.params.privateKey;
        if (cryptoService.validateKey(key, type)) {
            next();
        } else {
            throw new ApiError(errorNames.FORBIDDEN_ERROR);
        }
    };
}

module.exports = isValidKey;