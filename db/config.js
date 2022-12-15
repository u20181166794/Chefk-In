const { config } = require('./../config/config');

module.exports = {
  production: {
    url: config.dbUrl,
    dialect: 'postgres'
  }
}