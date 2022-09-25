import express from 'express';
// import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logger from './library/Logger';

const router = express();

// Connect to mongoDB

mongoose
    .connect(config.mongo.url)
    .then(() => {
        Logger.info('connected');
    })
    .catch((err) => Logger.error(err));
