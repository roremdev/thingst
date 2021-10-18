import { DataTypes, Sequelize as SequelizeClient } from 'sequelize';

/**
 * @description description of each field in the table
 * @typedef {Object} field definition
 * @property {boolean} allowNull - false=NOT NULL
 * @property {boolean} autoIncrement - each insert, increase the counter
 * @property {boolean} primaryKey - define is primary key
 * @property {boolean} type - expresion to match SQL type
 * @property {boolean} unique - difne as unique the field
 * @property {boolean} field - rename the field
 */
export default {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
<<<<<<< HEAD
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer',
    },
=======
>>>>>>> 216b14b847287c04da2c54f6efd683f825c8c97a
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: SequelizeClient.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: SequelizeClient.DATE,
    },
};
