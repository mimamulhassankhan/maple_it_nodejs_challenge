const { errorNames, errorCodes } = require("../config/constants");


class ApiError extends Error {
    constructor(type = errorNames.BAD_REQUEST_ERROR, message, errors = {}) {
        const errorDetails = errorCodes[type];
        super(message || errorDetails.message);
        this.name = this.constructor?.name || 'ApiError';
        this.errors = errors;
        this.statusCode = errorDetails.statusCode || 400;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.type = type;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ApiError;
