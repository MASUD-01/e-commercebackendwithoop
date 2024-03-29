import fs from 'fs';
import knex from 'knex';
import config from './utils/config';

// const serverCa = [fs.readFileSync('./DigiCertGlobalRootCA.crt.pem', 'utf8')];

export const db_name = 'booking';

const createDbConn = () => {
  const conn = knex({
    client: 'mysql2',
    connection: {
      database: db_name,
      port: 3306,
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      //   ssl: {
      //     rejectUnauthorized: true,
      //     ca: serverCa,
      //   },
    },
    pool: { min: 0, max: 7 },
  });

  console.log('connected to database...');

  return conn;
};

export const db = createDbConn();
