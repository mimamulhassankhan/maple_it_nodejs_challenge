const { errorCodes } = require("../config/constants")

// API error extends base Error class
class APIError extends Error {
    constructor(name, message) {
        super(message)
        this.name = name
    }
}

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    const errorDetails = errorCodes.get(err.name)
    console.error(errorDetails)
    console.log('error', err.name)
    res.status(500)
    res.json({ message: err.message })
}

module.exports = errorHandler;