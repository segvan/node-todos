const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const todoController = require('./controllers/todosController');

let port = process.env.PORT || 8080;

let app = express();

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

app.delete('/todos/:id', (req, res) => {
    todoController.deleteById(req.params.id, res);
});

app.patch('/todos/:id', (req, res) => {
    let dto = _.pick(req.body, ['text', 'completed']);
    todoController.patchById(req.params.id, dto, res);
});

app.listen(port, () => {
    console.log('Started on port: ' + port);
});

module.exports = { app };