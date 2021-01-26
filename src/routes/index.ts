import express from 'express';
import * as http from 'http-status-codes';

import health from './health';

/**
 *
 * @param app
 * @returns
 */
export function init(app: express.Application): void {
  const router: express.Router = express.Router();

  /**
   * @description Forwards any requests to the /:router URI
   * to our Router (health)
   */
  app.get('/', (req, res) => res.send('Express + TypeScript Server'));
  app.use('/health', health);

  /**
   * @description No results returned means the object is not found
   * @constructs
   */
  app.use((req, res) => {
    res.status(404).send(http.StatusCodes[404]);
  });

  /**
   * @contructs all routes
   */
  app.use(router);
}
