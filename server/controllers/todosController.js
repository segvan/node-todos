const { ObjectID } = require('mongodb');

const { orm } = require('./../db/mongoose');
const { User } = require('./../models/user');
const { Todo } = require('./../models/todo');

let post = (body, res) => {
    let todo = new Todo({
        text: body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
};

let getAll = (res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (err) => {
        res.status(400).send(err);
    });
};

let getById = (id, res) => {
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }, (err) => {
        res.status(400).send(err);
    });
};

let deleteById = (id, res) => {
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }, (err) => {
        res.status(400).send(err);
    });
};

module.exports = { post, getAll, getById, deleteById };