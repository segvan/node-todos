const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST /todos', ()=>{
    it('should create new todo', (done)=>{
        let text = 'fake';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text);
            })
            .end((err, res)=>{
                if(err){
                    return done(err);                    
                }

                Todo.findOne({text}).then((todo)=>{
                    expect(todo.text).toBe(text);
                    done();
                }).catch((e)=> done(e));
            });
    });
});