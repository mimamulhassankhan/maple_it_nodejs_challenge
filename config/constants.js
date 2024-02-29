
const errorNames = {
    NotFound: "NotFound",
    BadRequest: "BadRequest",
    Unauthorized: "Unauthorized",
    Forbidden: "Forbidden",
    Conflict: "Conflict",
    InternalServerError: "InternalServerError"
}
const errorCodes = new Map(
    [
        [errorNames.BadRequest, "Bad Request", 400],
        [errorNames.NotFound, "Not Found", 404],
        [errorNames.Unauthorized, "Unauthorized", 401],
        [errorNames.Forbidden, "Forbidden", 403],
        [errorNames.Conflict, "Conflict", 409],
        [errorNames.InternalServerError, "Internal Server Error", 500]
    ]
);

module.exports = {
    errorNames,
    errorCodes
};
