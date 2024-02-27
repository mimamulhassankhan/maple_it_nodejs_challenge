const express = require('express')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const createError = require('http-errors');

const indexRouter = require('./routes/index');
const filesRouter = require('./routes/files');

const app = express()
const port = 3000


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/files', filesRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})