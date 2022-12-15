require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3001,
  dbUrl: process.env.DATABASE_URL,
}

module.exports = { config };