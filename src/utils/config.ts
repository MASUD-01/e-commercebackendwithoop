import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface Config {
  DB_PASS: string;
  DB_USER: string;
  DB_PORT: string;
  DB_HOST: string;
  COOKIES_NAME: string;
  JWT_SECRET: string;
  SERVER_PORT: string;
  SENDER_EMAIL: string;
  SENDER_EMAIL_APP_PASS: string;
}

const config: Config = {
  DB_PASS: process.env.DB_PASS || '',
  DB_USER: process.env.DB_USER || '',
  DB_PORT: process.env.DB_PORT || '',
  DB_HOST: process.env.DB_HOST || '',
  COOKIES_NAME: process.env.COOKIES_NAME || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  SERVER_PORT: process.env.SERVER_PORT || '5000',
  SENDER_EMAIL: process.env.SENDER_EMAIL || '',
  SENDER_EMAIL_APP_PASS: process.env.SENDER_EMAIL_APP_PASS || '',
};

export default config;