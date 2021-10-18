import userSchema from '../models/user';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.createTable('users', userSchema);
    },

    down: async (queryInterface) => {
        await queryInterface.drop('users');
    },
};
