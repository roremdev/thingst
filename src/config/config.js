if (process.env.NODE_ENV !== 'production')
    require('dotenv').config({ path: './src/config/.env' });

export default {
    port: process.env.PORT,
    mode: process.env.MODE || process.env.NODE_ENV,
};
