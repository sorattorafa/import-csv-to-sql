const knex = require('knex'); // import knew
const config = require('./knexconfigs');
// config file of knew
const developmentConfig = config.development; // select the config of database
const connection = knex(developmentConfig); // set knex conection
module.exports = connection; // export connection
