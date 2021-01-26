import express from 'express';
import * as Middleware from './middlewares/express';
import * as Routes from './routes/index';
import config from './config/index';

/**
 * @constructs { express.Application }
 */
const app: express.Application = express();

/**
 * @constructs express.Application Middleware
 */
Middleware.configure(app);

/**
 * @constructs express.Application Routes
 */
Routes.init(app);

/**
 * sets port 3000 to default or unless otherwise sepcified in the .env
 */
app.set('port', config.port);

/**
 * @exports { express.Application }
 */
export default app;
