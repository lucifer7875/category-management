/* eslint-disable prettier/prettier */
import path = require('path');
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import Routes from '../routes';
import routesLogger from '../middleware/routesLogger';
import { ResponseBuilder } from '../helpers/responseBuilder';
import Log from '../helpers/logger';
import CONSTANTS from '../helpers/constants';
import mongooseConnection from '../config/db';
import * as session from 'express-session';

const {
  MESSAGES: { ERR_URL_NOT_FOUND },
} = CONSTANTS;

dotenv.config();

export default class App {
  private app: express.Application;
  private responseBuilder: ResponseBuilder;
  private logger = Log.getLogger();

  constructor() {
    this.app = express(); // init the application
    this.configuration();
    this.routes();
    this.responseBuilder = new ResponseBuilder();
    // Connect to the database after configuration
    this.db();
  }

  /**
   * Method to configure the server
   */
  public configuration() {
    this.app.set('port', process.env.PORT || 8080);

    const corsConfig = {
      origin: true, // Allow all origins (or specify your frontend URL)
      credentials: true,
    };

    this.app.use(cors(corsConfig));
    this.app.options('*', cors(corsConfig));

    this.app.use(express.json());
    this.app.use(session({
      secret: process.env.SESSION_SECRET || "category_managerment",
      cookie: { maxAge: 300000 }, // 5 min
      resave: false,
      saveUninitialized: true
    }));

    // Removed manual CORS headers middleware as 'cors' package handles it
  }

  public async db() {
    try {
      await mongooseConnection.asPromise();
      this.logger.info('Database connected successfully');
    } catch (error) {
      this.logger.error('Database connection failed', error);
      process.exit(1);
    }
  }

  /**
   * Method to configure the routes
   */
  public async routes() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());

    const routes = new Routes();
    this.app.use(routesLogger);

    this.app.use('/api', routes.path());
    this.app.use('/public', express.static(path.join('public')));

    // 404 Handler
    this.app.use('/*', (req: express.Request, res: express.Response) =>
      this.responseBuilder.responseContent(res, 404, false, ERR_URL_NOT_FOUND),
    );

    // Global Error Handler
    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      this.logger.error('Unhandled Error:', err);
      return this.responseBuilder.responseContent(res, 500, false, 'Internal Server Error');
    });
  }

  /**
   * Used to start the server
   */
  public async start() {
    const host = process.env.HOST_SERVER || 'localhost';
    this.app.listen(this.app.get('port'), () => {
      this.logger.info(
        `Server is running at http://${host}:${this.app.get('port')}.`,
      );
    });
  }
}

const server = new App(); // Create server instance
server.start(); // Execute the server
