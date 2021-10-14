// TODO: @throws {ErrorObject} - error to get resource
import { Pool as PostgresClient } from 'pg';

export default class Postgres {
    /**
     * @private
     * @description singleton pattern for pool connection
     * @returns {object} - connection client
     */
    async #connect() {
        try {
            if (!Postgres.connection) {
                Postgres.connection = new PostgresClient();
                console.log('Connected succesfully');
            }
            return Postgres.connection;
        } catch (error) {
            console.log(error);
        }
    }
    /**
     * @description query process in table
     * @param {string} request - SQL string request
     * @returns {Object} - response query postgresDB
     */
    async query(request) {
        try {
            const db = await this.#connect();
            return await db.query(request);
        } catch (error) {
            console.log(error);
        }
    }
}
