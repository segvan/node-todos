var express = require('express');
var bodyParser = require('body-parser');

const todoController = require('./controllers/todosController');

let port = 8080;

var app = express();

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    todoController.getAll(res);
});

app.get('/todos/:id', (req, res) => {
    todoController.getById(req.params.id, res);
});

app.post('/todos', (req, res) => {
    todoController.post(req.body, res);
});

app.listen(port, () => {
    console.log('Started on port: ' + port);
});

module.exports = { app };