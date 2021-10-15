if (process.env.NODE_ENV !== 'production')
    require('dotenv').config({ path: './src/config/.env' });

/**
 * @description native variables of server
 */
export const server = {
    port: process.env.PORT,
    mode: process.env.MODE || process.env.NODE_ENV,
};

/**
 * @description variables of database server
 */
export const database = {
    dbName: process.env.PGDATABASE,
    dbHost: process.env.PGHOST || 'localhost',
    dbPort: process.env.PGPORT || '5432',
    dbUser: process.env.PGUSER,
    dbPassword: process.env.PGPASSWORD,
};
