const orm = require('mongoose');

orm.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Todo');
orm.Promise = global.Promise;

module.exports = { orm };