const orm = require('mongoose');

orm.connect('mongodb://localhost:27017/Todo');
orm.Promise = global.Promise;

module.exports = { orm };