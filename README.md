# maple_it_nodejs_challenge

## Description

This is a simple Node.js application that uses the Express.js framework to create a simple RESTful API. The API allows users to upload, download, update, and delete files. The application uses a simple in-memory data store to persist the files data. The application also includes a simple test suite that uses the Jest and supertest libraries to test the API endpoints.

## Before you begin

Before you begin, ensure you have met the following requirements:

- Nodejs: (v20.8.1)[https://nodejs.org/en/download/] latest LTS
- NPM: (v10.1.0)[https://www.npmjs.com/get-npm]

## Installation

To install the application, clone the repository and run the following command to install the dependencies:

```bash
npm install
```

to install the dev dependencies run the following command. **Note: This is only required if you want to run the tests.**

```bash
npm install --only=dev
```

## Environment Variables

The application uses the following environment variables:

```env
PORT=3000

# Inactivity timeout in seconds
INACTIVITY_TIMEOUT=60

# Maximum number of daily downloads and uploads per day
MAX_DAILY_DOWNLOADS=3
MAX_DAILY_UPLOADS=3

# Upload folder absolute path windows
FOLDER=D:\\maple_it_nodejs_challenge\\uploads
```

## Running the application

After installing the application and setup the environment variables, run the following command to start the application:

```bash
npm start dev
```

This will start the application in development mode and watch for changes. To start the application in production mode, run the following command:

```bash
npm start
```

After starting the application, application should start on desired port mentioned in environment variables. You can access the application by visiting the following URL:

```url
http://localhost:{PORT}
```

## Run the tests

To run the tests, run the following command:

```bash
npm test
```

Make sure to install the dev dependencies before running the tests. The tests will run and display the results in the terminal.

## Acknowledgements about my writing test cases

I am not a good test case writer, I have indepth knowledge of writing test cases, hence I have written only few test cases. I have written test cases for the happy path and few negative test cases. I have not written test cases for all the scenarios. Advanced test cases like edge cases, rate limiting, cron jobs, etc are not written. I have written only basic test cases.

My apologies for not writing the test cases as per the expectations.

## How CRON job works in this application
First of you need to set the environment variable `INACTIVITY_TIMEOUT` to the desired value in seconds. The default value is 60 seconds. The application uses the `node-cron` library to schedule a cron job that runs every desired time interval. 

When a file is uploaded, file model saves the expires field with the current time plus the inactivity timeout, and when download is requested, the application modify the expires field with the current time plus the inactivity timeout. 

The cron job runs every desired time interval and check for expired files. If the file is expired, the application deletes the file from the file system and the in-memory data store.

This is simple implementation of the cron job.

## Acknowledgement about Data Persistence


