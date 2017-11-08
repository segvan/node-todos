var express = require('express');
var bodyParser = require('body-parser');

const todoController = require('./controllers/todosController');

let port = 8080;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    todoController.post(req.body, res);
});

app.listen(port, ()=>{
    console.log('Started on port: ' + port);
});
