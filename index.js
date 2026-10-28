import express from 'express';
import apiRouter from './apiRouter.js';
import logger from './logger.js';
import pinoHttp from 'pino-http';

const app = express();
const port = process.env.PORT || 3000;

app.use(pinoHttp({logger}));

app.use(express.static("./public"));

app.use("/api", apiRouter);

app.listen(port, () => {
    logger.info({port}, "Starting server!");
});