const express = require('express');
const apiRouter = require('./apiRouter.js');
const logger = require('./logger.js');
const pinoHttp = require('pino-http');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

app.use(pinoHttp({logger}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static("./public"));
app.use("/api", apiRouter);

app.listen(port, () => {
    logger.info({port}, "Starting server!");
});