const cron = require('node-cron');
const { appConfig } = require('../config/constants');
const filesService = require('./files');

const task = cron.schedule(`*/${appConfig.inactivityTimeout} * * * * *`, () => {
    console.log(`running a task every ${appConfig.inactivityTimeout}`);
    const expiredFiles = filesService.listExpiredFiles();
    expiredFiles.forEach(file => {
        filesService.deleteFile(file.id);
    });
}, {
    scheduled: false
});

module.exports = task;