const orm = require('mongoose');

orm.connect('mongodb://localhost:27017/Todo');
orm.Promise = global.Promise;

var Todo = orm.model('Todo',{
    text:{
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

let newTodo = new Todo({
    text: 'Eat dinner'
});

newTodo.save().then((doc) => {
    console.log(doc);
});