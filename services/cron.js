class CronService {
    constructor() {
        this.cron = require('node-cron');
    }

    start() {
        this.cron.schedule('*/5 * * * *', () => {
            console.log('running a task every 5 minutes');
        });
    }

    // I need to run a scheculed task every 10 minutes
    // and check 

}