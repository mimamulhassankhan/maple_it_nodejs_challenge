const dotenv = require('dotenv');
dotenv.config();

const errorNames = {
    VALIDATION_ERROR: 'ValidationError',
    CAST_ERROR: 'CastError',
    DUPLICATE_ERROR: 'DuplicateError',
    NOT_FOUND_ERROR: 'NotFoundError',
    UNAUTHORIZED_ERROR: 'UnauthorizedError',
    FORBIDDEN_ERROR: 'ForbiddenError',
    INTERNAL_SERVER_ERROR: 'InternalServerError',
    BAD_REQUEST_ERROR: 'BadRequestError',
    UNPROCESSABLE_ENTITY_ERROR: 'UnprocessableEntityError',
    NOT_IMPLEMENTED_ERROR: 'NotImplementedError',
    SERVICE_UNAVAILABLE_ERROR: 'ServiceUnavailableError',
    GATEWAY_TIMEOUT_ERROR: 'GatewayTimeoutError',
    TOO_MANY_REQUESTS_ERROR: 'TooManyRequestsError',
    CONFLICT_ERROR: 'ConflictError',
};

const errorCodes = {
    [errorNames.BAD_REQUEST_ERROR]: {
        statusCode: 400,
        message: 'Bad request',
    },
    [errorNames.VALIDATION_ERROR]: {
        statusCode: 423,
        message: 'Validation error',
    },
    [errorNames.UNAUTHORIZED_ERROR]: {
        statusCode: 401,
        message: 'Unauthorized Resource',
    },
    [errorNames.FORBIDDEN_ERROR]: {
        statusCode: 403,
        message: 'Forbidden Resource',
    },
    [errorNames.NOT_FOUND_ERROR]: {
        statusCode: 404,
        message: 'Not found Target Resource',
    },
    [errorNames.TOO_MANY_REQUESTS_ERROR]: {
        statusCode: 429,
        message: 'Too many requests',
    },
}

const appConfig = {
    name: process.env.API_NAME || 'API',
    version: process.env.API_VERSION || '1.0.0',
    port: process.env.PORT || 5000,
    uploadDir: process.env.FOLDER || '/var/www/uploads/',
    inactivityTimeout: process.env.INACTIVITY_TIMEOUT || 5 * 60,
    maxDailyDownloads: process.env.MAX_DAILY_DOWNLOADS || 5,
    maxDailyUploads: process.env.MAX_DAILY_UPLOADS || 5,
};

module.exports = {
    errorNames,
    errorCodes,
    appConfig
};
