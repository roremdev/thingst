import Postgres from '../libs/Postgres';
import format from 'pg-format';

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
     * @private
     * @description format data structure
     * @param {object} body - body request
     * @returns {object} - { fields, values, tuples }
     */
    #formatStructure(body) {
        return {
            fields: Object.keys(body).join(),
            values: Object.values(body),
            tuples: Object.entries(body).map(([key, value]) =>
                format(`${key} = %L`, value)
            ),
        };
    }
    /**
     * @description find all registers in table
     * @returns {array} - response query postgresDB as array
     */
    async findAll() {
        return await this.client.query(`SELECT * FROM ${this.table}`);
    }
    /**
     * @description create a register in table
     * @param {object} body - body request
     * @returns {array} - response query postgresDB as array
     */
    async create(body) {
        const { fields, values } = this.#formatStructure(body);
        const request = format(
            `INSERT INTO ${this.table}(${fields}) VALUES(%L) RETURNING *`,
            values
        );
        return await this.client.query(request);
    }
    /**
     * @description updates parcials of a register in table
     * @param {object} param - param request
     * @param {object} body - body request
     * @returns {array} - response query postgresDB as array
     */
    async update({ id }, body) {
        const { tuples } = this.#formatStructure(body);
        const request = format(
            `UPDATE ${this.table} SET ${tuples} WHERE id = ${id} RETURNING *`
        );
        return await this.client.query(request);
    }
    /**
     * @description delete a register in table
     * @param {object} param - param request
     * @returns {array} - response query postgresDB as array
     */
    async delete({ id }) {
        const request = format(
            `DELETE FROM ${this.table} WHERE id = ${id} RETURNING *`
        );
        return await this.client.query(request);
    }
}
