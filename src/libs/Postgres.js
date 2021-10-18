import { Pool as PostgresClient } from 'pg';
import Error from '../utils/Error';

export default class Postgres {
    /**
     * @private
     * @description singleton pattern for pool connection
     * @returns {object} - connection client
     */
    async #connect() {
        return !Postgres.connection
            ? (Postgres.connection = new PostgresClient())
            : Postgres.connection;
    }
    /**
     * @description query process in table
     * @param {string} request - SQL string request
     * @returns {array} - response query postgresDB
     */
    async query(request) {
        try {
            const db = await this.#connect();
            const { rows } = await db.query(request);
            return rows;
        } catch ({ message }) {
            throw new Error(message, 'DRIVER');
        }
    }
}
