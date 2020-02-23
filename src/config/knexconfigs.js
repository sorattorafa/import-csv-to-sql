module.exports = {
  development: {
    dialect: 'mysql',
    client: 'mysql2', // type of client
    connection: { // conection exported
      host: '127.0.0.1', // host
      user: 'soratto', // user
      password: 'soratto',
      database: 'usersdb', // db
    },
  },
};
