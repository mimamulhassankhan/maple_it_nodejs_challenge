const setRateLimit = require("express-rate-limit");
const { appConfig, errorNames } = require("../config/constants");

const time = 1 * 60 * 1000;

const downloadLimit = setRateLimit({
    windowMs: time,
    max: appConfig.maxDailyDownloads,
    message: `You have exceeded your ${appConfig.maxDailyDownloads} requests per day limit.`,
    headers: true,
});

const uploadLimit = setRateLimit({
    windowMs: time,
    max: appConfig.maxDailyUploads,
    message: `You have exceeded your ${appConfig.maxDailyUploads} requests per day limit.`,
    headers: true,
});

module.exports = {
    downloadLimit,
    uploadLimit,
};