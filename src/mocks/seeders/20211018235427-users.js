module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                email: 'ttrime0@zimbio.com',
                password: 'dIkttoW58AZl',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                email: 'hbrychan1@globo.com',
                password: 'LWGHo4Sf',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                email: 'kkeaveny2@unesco.org',
                password: '8iKZ14bBA',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                email: 'ppuve3@goo.ne.jp',
                password: 'GLY4O1',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                email: 'dwinspeare4@bigcartel.com',
                password: 'dWYttZ4',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('users', null, {});
    },
};
