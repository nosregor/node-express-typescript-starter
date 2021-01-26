import express, { Application } from 'express';
import logger from 'morgan';
import cors from 'cors';

/**
 * @export
 * @param { Application } app
 */
export function configure(app: Application): void {
  // * Application-Level Middleware * //

  // Third-Party Middleware
  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());
  app.use(logger('dev'));

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // cors
  app.use((_req, res, next) => {
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS ',
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With,' +
        ' Content-Type, Accept,' +
        ' Authorization,' +
        ' Access-Control-Allow-Credentials',
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
}
