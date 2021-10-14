import Postgres from '../libs/Postgres';

export default class ResourcesService {
    /**
     * @description DAO postgresDB tables
     * @param {string} table - table name
     */
    constructor(table) {
        this.table = table;
        this.client = new Postgres();
    }

    /**
     * @description find all registers in table
     * @returns {array} - response query mongoDB as array
     */
    async findAll() {
        const { rows } = await this.client.query(`SELECT * FROM ${this.table}`);
        return rows;
    }
}
