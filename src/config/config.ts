import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
  dbHost: process.env.DB_HOST || 'localhost',
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || '',
  dbPort: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  dbName: process.env.DB_NAME || '',
};
