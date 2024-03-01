const { errorCodes, errorNames } = require("../config/constants")
const ApiError = require("../lib/ApiError")

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    console.error(err)
    let statusCode = 400;
    let message = 'Bad request';
    let errors = {};
    let status = 'fail';
    let type = errorNames.BAD_REQUEST_ERROR;

    if (err instanceof ApiError) {
        statusCode = err.statusCode;
        message = err.message;
        errors = err.errors;
        status = err.status;
        type = err.type;
    }

    res.status(statusCode)
    res.json({ type, status, message, ...(Object.keys(errors).length > 0 ? errors : {}) })
}

module.exports = errorHandler;