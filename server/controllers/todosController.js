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

module.exports = { post };