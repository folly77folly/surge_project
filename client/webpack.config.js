require('dotenv').config();

module.exports = process.env.NODE_ENV == 'development'
    ? require('./config/webpack/development')
    : require('./config/webpack/production');
