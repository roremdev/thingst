import { Sequelize as SequelizeClient } from 'sequelize';
import { database } from '../config/config';
import Error from '../utils/Error';

const USER = encodeURIComponent(database.dbUser);
const PASSWORD = encodeURIComponent(database.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${database.dbHost}:${database.dbPort}/${database.dbName}`;

export default class Sequelize {
    /**
     * @private
     * @description singleton pattern for pool connection
     * @returns {object} - connection client
     */
    async #connect() {
        try {
            if (!Sequelize.connection) {
                Sequelize.connection = new SequelizeClient(URI, {
                    logging: false,
                });
                await Sequelize.connection.authenticate();
            }
            return Sequelize.connection;
        } catch ({ message }) {
            throw new Error(message, 'DRIVER');
        }
    }
    /**
     * @description process definition for create database tables
     * @param {string} name - table name
     * @param {string} schema - table description
     * @returns {Promise} - response of library
     */
    async define(name, schema) {
        try {
            const db = await this.#connect();
            const model = await db.define(name, schema);
            return await model.sync();
        } catch (error) {
            if (!error) throw new Error(message, 'DEFINITION');
            throw error;
        }
    }
    /**
     * @description migration builder object
     */
    static migration() {
        return {
            development: {
                username: database.dbUser,
                password: database.dbPassword,
                database: database.dbName,
                host: database.dbHost,
                dialect: 'postgres',
            },
        };
    }
}
