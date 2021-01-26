import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  name: string;
  port: string | number;
  database: {
    MONGO_URI: string;
  };
  secret: string;
}

function getStringEnv(
  variable: string,
  defaultValue?: string,
): string {
  const val = process.env[variable];
  if (!val) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(
      `${variable} not found. Set ${variable} environment variable.`,
    );
  }
  return val;
}

const NODE_ENV: string = getStringEnv('NODE_ENV', 'development');
const NAME = 'node-typescript-service';
const PORT: string | number = getStringEnv('PORT', '3000');

const development: IConfig = {
  name: NAME,
  port: PORT,
  database: {
    MONGO_URI: MONGO_URI,
  },
  secret: SECRET,
};

const production: IConfig = {
  name: NAME,
  port: PORT,
  database: {
    MONGO_URI: MONGO_URI,
  },
  secret: SECRET,
};

const config: {
  [name: string]: IConfig;
} = { development, production };

export default config[NODE_ENV];
